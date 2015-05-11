module.exports = {
    lib: [
        'lib/*'
    ],
    reset: [
        '<%= paths.build.flat.root %>/<%= grunt.config("design") %>',
        '<%= paths.build.dist.root %>/<%= grunt.config("design") %>'
    ],
    design: [
        '<%= paths.build.flat.root %>/<%= grunt.config("design") %>',
        '<%= paths.build.dist.root %>/<%= grunt.config("design") %>',
        '<%= paths.src.assets %>/<%= grunt.config("design") %>',
        '<%= paths.src.flats %>/<%= grunt.config("design") %>',
        '<%= paths.src.themes %>/<%= grunt.config("design") %>'
    ]
};