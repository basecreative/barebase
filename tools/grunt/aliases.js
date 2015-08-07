module.exports = {
    'default': [
        'remove:jason'
    ],
    'dev': [
        'copy:shims',
        'copy:flat',
        'copy:dist',
        'copy:assets',
        'sass:dev',
        'autoprefixer',
        'concat:modernizr',
        'concat:dist',
        'newer:imagemin:dynamic',
        'svgmin:dist',
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
        'newer:imagemin:dynamic',
        'svgmin:dist'
    ],
    'commit': ['clean:reset']
};
