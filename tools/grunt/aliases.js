module.exports = {
    'default': [],
    'dev': [
        'copy:shims',
        'copy:flat',
        'copy:dist',
        'copy:assets',
        'sass:dev',
        'autoprefixer',
        'concat:modernizr',
        'concat:dist:<%= grunt.config("design") %>',
        'newer:imagemin:dynamic',
        'svgmin:dist',
        'cssmin:dev',
        'copy:flat_dist',
        'browserSync',
        'watch'
    ],
    'build': [
        'copy:shims',
        'copy:dist',
        'sass:dist',
        'autoprefixer',
        'modernizr:dist',
        'concat:dist',
        'uglify',
        'cssmin:dist',
        'newer:imagemin:dynamic',
        'svgmin:dist'
    ],
    'commit': ['clean:reset']
};
