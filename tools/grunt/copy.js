module.exports = {
   dist: {
       expand: true,
       cwd: '<%= paths.src.flats %>/<%= grunt.config("design") %>/',
       src: ['*.{html,php}', '<%= paths.assets.js %>/yepnope/**'],
       dest: '<%= paths.build.flat.root %>/<%= grunt.config("design") %>/'
   },
   shims: {
       expand: true,
       cwd: '<%= paths.src.assets %>/<%= grunt.config("design") %>/',
       src: ['<%= paths.assets.js %>/shims/**'],
       dest: '<%= paths.build.flat.root %>/<%= grunt.config("design") %>/'
   },
};
