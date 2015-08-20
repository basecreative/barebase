module.exports = {
    'default': [],
    'dev': [
        'copy:shims',
        'copy:flat',
        'copy:dist',
        'copy:assets',
        'sass:dev',
        'autoprefixer',
        'concat:modernizr:<%= grunt.config("design") %>',
        'concat:dist:<%= grunt.config("design") %>',
        'newer:imagemin:dynamic',
        'svgmin:dist:<%= grunt.config("design") %>',
        'cssmin:dev',
        'copy:flat_dist',
        'browserSync',
        'watch'
    ],
    'deploy': [
        'copy:shims',
        'copy:flat',
        'copy:dist',
        'copy:assets',
        'sass:dist',
        'autoprefixer',
        'modernizr:dist',
        'concat:dist:<%= grunt.config("design") %>',
        'uglify',
        'cssmin:dist',
        'newer:imagemin:dynamic',
        'svgmin:dist:<%= grunt.config("design") %>'
    ],
    'commit': ['clean:reset']
};