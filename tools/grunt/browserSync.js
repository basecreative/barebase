module.exports = {
    default_options: {
        bsFiles: {
            src: [
                '<%= paths.build.flat.root %>/<%= grunt.config("design") %>/css/**.css',
                '<%= paths.src.assets %>/<%= grunt.config("design") %>/<%= paths.assets.scss %>/**.scss',
                '<%= paths.build.flat.root %>/<%= grunt.config("design") %>/*.{html,php}'
            ]
        },
        options: {
            watchTask: true,
            server: {
                baseDir: '<%= paths.build.flat.root %>/<%= grunt.config("design") %>'
            }
        }
    }
};
