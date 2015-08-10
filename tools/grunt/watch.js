module.exports = {

    sass: {
      files: [
        '<%= paths.src.assets %>/<%= grunt.config("design") %>/<%= paths.assets.scss %>/**.scss', 
        '<%= paths.src.assets %>/<%= grunt.config("design") %>/<%= paths.assets.scss %>/**/*.scss'
      ],
      tasks: ['sass:dev', 'autoprefixer'],
      options: {
        spawn: false,
        livereload: true,
      }
    },

    scripts: {
      files: [
        '<%= paths.src.assets %>/<%= grunt.config("design") %>/<%= paths.assets.js %>/**/**.js',
        '<%= paths.src.assets %>/<%= grunt.config("design") %>/<%= paths.assets.js %>/**.js'
      ],
      tasks: ['concat:dist:<%= grunt.config("design") %>', 'copy:flat_dist'],
      options: {
        spawn: true,
        livereload: true,
        }
    },

    content: {
      files: ['<%= paths.src.flats %>/<%= grunt.config("design") %>/**.{html,php}'],
      tasks: ['newer:copy:flat'],
      options: {
        spawn: false,
        livereload: true,
      }
    },

    content_theme: {
      files: ['<%= paths.src.themes %>/<%= grunt.config("design") %>/**.{html,php}'],
      tasks: ['newer:copy:dist'],
      options: {
        spawn: false,
        livereload: true,
      }
    },

    assets: {
      files: ['<%= paths.src.assets %>/<%= grunt.config("design") %>/<%= paths.assets.img %>/**.{png,jpg,gif}'],
      tasks: ['newer:imagemin:dynamic', 'copy:flat_dist'],
      options: {
        livereload: true,
        },
    },

    svg: {
      files: [
        '<%= paths.src.assets %>/<%= grunt.config("design") %>/<%= paths.assets.img %>/**.svg',
        '<%= paths.src.assets %>/<%= grunt.config("design") %>/<%= paths.assets.img %>/**/*.svg'
      ],
      tasks: ['svgmin:dist:<%= grunt.config("design") %>', 'copy:flat_dist'],
      options: {
        livereload: true,
      },
    }
    
};
