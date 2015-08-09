module.exports = {
  flat: {
    expand: true,
    cwd: '<%= paths.src.flats %>/<%= grunt.config("design") %>/',
    src: ['**.{html,php}'],
    dest: '<%= paths.build.flat.root %>/<%= grunt.config("design") %>/'
  },
  dist: {
    expand: true,
    cwd: '<%= paths.src.themes %>/<%= grunt.config("design") %>/',
    src: ['**.{html,php}'],
    dest: '<%= paths.build.dist.root %>/<%= grunt.config("design") %>/'
  },
  assets: {
    expand: true,
    cwd: '<%= paths.src.assets %>/<%= grunt.config("design") %>/',
    src: ['<%= paths.assets.js %>/yepnope/**', '<%= paths.assets.fonts %>/**'],
    dest: '<%= paths.build.flat.root %>/<%= grunt.config("design") %>/'
  },
  flat_dist: {
    expand: true,
    cwd: '<%= paths.build.flat.root %>/<%= grunt.config("design") %>/',
    src: ['<%= paths.assets.js %>/**', '<%= paths.assets.img %>/**', '<%= paths.assets.fonts %>/**'],
    dest: '<%= paths.build.dist.root %>/<%= grunt.config("design") %>/'
  },
  shims: {
    expand: true,
    cwd: '<%= paths.src.assets %>/<%= grunt.config("design") %>/',
    src: ['<%= paths.assets.js %>/shims/**'],
    dest: '<%= paths.build.flat.root %>/<%= grunt.config("design") %>/'
  }
};
