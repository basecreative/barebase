module.exports = function(grunt) {

var mozjpeg = require('imagemin-mozjpeg');

	// Project configuration.
	grunt.initConfig({

     pkg: grunt.file.readJSON('package.json'),
     
	     // ***** CONFIG
	    sass: {
				dist: {
					options: {
						style: 'nested'
					},
					files: {
						'src/css/style.css': 'src/scss/style.scss'
					}
				} 
		},


		autoprefixer: {
			
			single_file: {
		      options: {
		        browsers: ['last 5 versions', 'ie 8', 'ie 9']
		      },
		      src: 'src/css/style.css',
		      dest: 'src/css/style.css'
		    }

		},



		concat: {
			dist: {
				src: [
					'src/js/*.js',  
					'src/js/core.js'  
				],
				dest: 'src/js/core.min.js',
			}
		},


		svgmin: {
	        options: {
	            plugins: [
	                {
	                    removeViewBox: false
	                }, {
	                    removeUselessStrokeAndFill: false
	                }
	            ]
	        },
	        dist: {
	            files: {
	            // Dictionary of files
		      	// Need to explicitly list all image files and destination
	                'src/img/image.svg': 'src/image.svg'
	            }
	        }
	    },	



		imagemin: {                       
		    dynamic: {                          // Another target
		    	options: {                      // Target options
			        optimizationLevel: 3,
			        svgoPlugins: [{ removeViewBox: false }],
			        use: [mozjpeg()]
			     },

		      files: [{
		        expand: true,                   // Enable dynamic expansion
		        cwd: 'src/img/',                // Src matches are relative to this path
		        src: ['**/*.{png,jpg,gif}'],   	// Actual patterns to match
		        dest: 'dist/img/'               // Destination path prefix
		      }]
		    }
		  },


	


		modernizr: {
		    dist: {
		        "devFile" : "src/js/vendor/modernizr.js",
		        "outputFile" : "src/js/modernizr-custom.js",

		        "extra" : {
		            "shiv" : true,
		            "printshiv" : false,
		            "load" : true,
		            "mq" : false,
		            "cssclasses" : true
		        },
		        "extensibility" : {
		            "addtest" : false,
		            "prefixed" : false,
		            "teststyles" : false,
		            "testprops" : false,
		            "testallprops" : false,
		            "hasevents" : false,
		            "prefixes" : false,
		            "domprefixes" : false,
		            "cssclassprefix": ""
		        },
		        "uglify" : true,
		        "tests" : [],
		        "parseFiles" : true,
		        "matchCommunityTests" : false,
		        "customTests" : []
		    }

		},


		combine_mq: {
		    new_filename: {
		        options: {
		                beautify: true
		        },
		      src: 'src/css/style.css',
		      dest: 'dist/css/style.css'
		    }
		  },

		criticalcss: {
	        custom: {
	            options: {
	                url: "http://localhost:3000",
	                width: 1200,
	                height: 900,
	                outputfile: "dist/css/critical.css",
	                filename: "src/css/style.css", // Using path.resolve( path.join( ... ) ) is a good idea here
	                buffer: 800*1024,
	                ignoreConsole: false
	            }
	        }
    	},


    	cssmin: {
		  target: {
		    files: [{
		      expand: true,
		      cwd: 'dist/css',
		      src: ['*.css', '!*.min.css'],
		      dest: 'dist/css',
		      ext: '.min.css'
		    }]
		  }
		},

		uglify: {
			build: {
				src: 'src/js/core.js',
				dest: 'src/js/core.min.js'
			}
		},




		browserSync: {
		  default_options: {
		    bsFiles: {
		      src: [
		        "src/css/*.css",
		        "src/*.html"
		      ]
		    },
		    options: {
		      watchTask: true,
		      server: {
		        baseDir: "src"
		      }
		    }
		  }
		},



	    watch: {

	     		scripts: {
					files: ['src/js/*.js', 'src/js/*/*.js'],
					tasks: ['concat', 'uglify'],
					options: {
						spawn: false,
						livereload: true,
					},

				},

	     		sass: {
		            files: ['src/scss/*.scss'],
		            tasks: ['sass', 'autoprefixer', 'criticalcss'],
		            options: {
		                spawn: false,
		                livereload: true,
	            }
	        } 

	     },


     
     });
  
    //*****  PLUGINS
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-svgmin');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-modernizr');
    grunt.loadNpmTasks('grunt-criticalcss');
    grunt.loadNpmTasks('grunt-combine-mq');
    grunt.loadNpmTasks('grunt-contrib-cssmin');



 
    //***** TASKS 

    grunt.registerTask('dev', ['browserSync', 'watch']);

   	grunt.registerTask('deploy', ['combine_mq', 'imagemin',  'modernizr', 'cssmin']);

   	

  
};