module.exports = {
    options: {
        plugins: [
            { removeViewBox: true },
            { removeUselessStrokeAndFill: false }
        ]
    },
    dist: {
        files: [{
            expand: true,
            cwd: '<%= paths.src.assets %>/<%= grunt.task.current.args[0] %>/<%= paths.assets.img %>/',
            src: ['*.svg', '**/*.svg'],
            dest: '<%= paths.build.flat.root %>/<%= grunt.task.current.args[0] %>/<%= paths.assets.img %>/'
        }]
    }
};
