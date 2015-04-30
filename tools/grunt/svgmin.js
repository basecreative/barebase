module.exports = {
    options: {
        plugins: [
            {
                removeViewBox: true
            },
            {
                removeUselessStrokeAndFill: false
            }
        ]
    },
    dist: {
        files: [{
            expand: true,
            cwd: '<%= paths.src.assets %>/<%= grunt.config("design") %>/<%= paths.assets.img %>/',
            src: ['*.svg'],
            dest: '<%= paths.build.flat.root %>/<%= grunt.config("design") %>/<%= paths.assets.img %>/',
            ext: '.svg',
            extDot: 'first'
        }]
    }
};
