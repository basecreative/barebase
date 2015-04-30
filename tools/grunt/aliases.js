module.exports = {
  'default': [
    'work:dev'
  ],
  'dev': [
    'copy:shims',
    'copy:dist',
    'sass:dev',
    'autoprefixer',
    'concat:modernizr',
    'concat:dist',
    'sass:dev',
    'autoprefixer',
    'newer:imagemin:dynamic',
    'svgmin:dist',
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
    'combine_mq',
    'cssmin',
    'uglify',
    'newer:imagemin:dynamic',
    'svgmin:dist'
    ],
    'commit': ['clean:reset']
};
