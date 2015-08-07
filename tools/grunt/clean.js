module.exports = {
    lib: [
        'lib/*'
    ],
    reset: [
        'build/<%= paths.build.flat.root %>/<%= grunt.config("design") %>',
        'build/<%= paths.build.dist.root %>/<%= grunt.config("design") %>'
    ],
    design: [
        'build/<%= paths.build.flat.root %>/<%= grunt.config("design") %>',
        'build/<%= paths.build.dist.root %>/<%= grunt.config("design") %>',
        '<%= paths.src.assets %>/<%= grunt.config("design") %>',
        '<%= paths.src.flats %>/<%= grunt.config("design") %>',
        '<%= paths.src.themes %>/<%= grunt.config("design") %>'
    ]
};