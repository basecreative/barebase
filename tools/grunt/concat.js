module.exports = {
    dist: {
        src: [
            '<%= paths.src.assets %>/<%= grunt.config("design") %>/<%= paths.assets.js %>/generic/*.js',
            //'<%= paths.src.assets %>/js/no-jquery/*.js',
            '<%= paths.src.assets %>/<%= grunt.config("design") %>/<%= paths.assets.js %>/core.js'
        ],
        dest: '<%= paths.build.flat.root %>/<%= grunt.config("design") %>/<%= paths.assets.js %>/core.js',
    },
    modernizr: {
        src: ['<%= paths.src.assets %>/<%= grunt.config("design") %>/<%= paths.assets.js %>/modernizr.dev.js'],
        dest: '<%= paths.src.assets %>/<%= grunt.config("design") %>/<%= paths.assets.js %>/generic/modernizr.custom.js',
    }
};
