module.exports = function (grunt, options) {
    var mozjpeg = require('imagemin-mozjpeg');

    return {
        dynamic: {                          // Another target
            options: {                      // Target options
                optimizationLevel: 3,
                svgoPlugins: [{ removeViewBox: false }],
                use: [mozjpeg()]
            },

            files: [{
                expand: true,                   // Enable dynamic expansion
                cwd: '<%= paths.src.assets %>/<%= grunt.config("design") %>/<%= paths.assets.img %>/',                // Src matches are relative to this path
                src: ['**.{png,jpg,gif}'],   	// Actual patterns to match
                dest: '<%= paths.build.flat.root %>/<%= grunt.config("design") %>/<%= paths.assets.img %>/'               // Destination path prefix
            }]
        }
    };
};
