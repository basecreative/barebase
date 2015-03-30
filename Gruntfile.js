module.exports = function(grunt) {

var mozjpeg = require('imagemin-mozjpeg');

	// Project configuration.
	grunt.initConfig({

	    pkg: grunt.file.readJSON('package.json'),
	     
	     // ***** CONFIG
	    sass: {
			dev: {
				options: {
					style: 'expanded',
					cacheLocation: 'dist/.sass-cache'
				},
				files: {
					'dist/css/style.css': 'src/scss/style.scss'
				}
			},
			dist: {
				options: {
					style: 'compressed',
					cacheLocation: 'dist/.sass-cache',
					noCache: true,
					sourcemap: 'none'
				},
				files: {
					'dist/css/style.css': 'src/scss/style.scss'
				}
			} 
		},

		autoprefixer: {
			single_file: {
		    	options: {
		        	browsers: ['last 5 versions', 'ie 8', 'ie 9']
		      	},
		      	src: 'dist/css/style.css',
		      	dest: 'dist/css/style.css'
		    }
		},

		combine_mq: {
		    new_filename: {
		        options: {
		            beautify: false
		        },
		    	src: 'dist/css/style.css',
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
	                filename: "dist/css/style.css", // Using path.resolve( path.join( ... ) ) is a good idea here
	                buffer: 800*1024,
	                ignoreConsole: false
	            }
	        }
		},

		cssmin: {
			files: {
				expand: true,
				cwd: 'dist/css',
				src: ['*.css', '!*.min.css'],
				dest: 'dist/css',
				ext: '.css'
			}
		},

		svgmin: {
	        options: {
	            plugins: [{
	                    removeViewBox: true
	                },{
	                    removeUselessStrokeAndFill: false
	            }]
	        },
	        dist: {
	            files: {
	                'dist/img/**.svg': 'src/img/**.svg'
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
		        	src: ['**.{png,jpg,gif}'],   	// Actual patterns to match
		        	dest: 'dist/img/'               // Destination path prefix
		    	}]
		    }
		},

		modernizr: {
		    dist: {
		        "devFile" : "src/js/modernizr.dev.js",
		        "outputFile" : "src/js/generic/modernizr.custom.js",

		        "extra" : {
		            "shiv" : true,
		            "printshiv" : false,
		            "load" : true,
		            "mq" : true,
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
		        "uglify" : false,
		        "tests" : [],
		        "parseFiles" : true,
		        "matchCommunityTests" : false,
		        "customTests" : []
		    }
		},


		concat: {
			dist: {
				src: [
					'src/js/generic/*.js', 
					//'src/js/no-jquery/*.js', 
					'src/js/core.js'
				],
				dest: 'dist/js/core.js',
			},
			modernizr: {
				src: ['src/js/modernizr.dev.js'],
				dest: 'src/js/generic/modernizr.custom.js',
			}
		},


		uglify: {
			dist: {
				src: 'dist/js/core.js',
				dest: 'dist/js/core.js'
			}
		},

		copy: {
			dist: {
				expand: true,
				cwd: 'src/',
				src: ['*.{html,php}', 'js/yepnope/**'], 
				dest: 'dist/'
			},
			shims: {
				expand: true,
				cwd: 'src/',
				src: ['js/shims/**'],
				dest: 'dist/'
			},
		},

		browserSync: {
		  default_options: {
		    bsFiles: {
		      src: [
		        "dist/css/**.css",
		        "src/scss/**.scss",
		        "dist/*.{html,php}"
		      ]
		    },
		    options: {
		      watchTask: true,
		      server: {
		        baseDir: "dist"
		      }
		    }
		  }
		},

		delete_sync: {
			dev: {
				cwd: 'dist',
				src: ['**', '!**/*.css', '!*/*/*.js', '!**/*.map'],
				syncWith: 'src'
			},
			dist: {
				cwd: 'dist',
				src: ['**', '!**/*.css', '!**/*.js'],
				syncWith: 'src'
			}
		},

		clean: {
			reset: [
				'dist'
			]
		},

	    watch: {

     		sass: {
	            files: ['src/scss/**.scss'],
	            files: ['src/scss/**/*.scss'],
	            tasks: ['sass:dev', 'autoprefixer'],
	            options: {
	                spawn: false,
	                livereload: true,
	            }
	        },

     		scripts: {
				files: ['src/js/**.js'],
				tasks: ['concat:modernizr', 'concat:dist'],
				options: {
					spawn: true,
					livereload: true,
				}
			},

			delete_sync: {
				files: ['src/**', 'src/**.{html,php,txt}'],
				tasks: ['delete_sync:dev'],
				options: {
					spawn: false,
					livereload: true,
				}
			},

     		content: {
				files: ['src/*.{html,php}'],
				tasks: ['newer:copy:dist'],
				options: {
					spawn: false,
					livereload: true,
				}
			},

			assets: {
				files: ['src/img/**.{png,jpg,gif}'],
				tasks: ['newer:imagemin:dynamic'],
				options: {
					livereload: true,
				},
			},

			svg: {
				files: ['src/img/**.{svg}'],
				tasks: ['svgmin:dist'],
				options: {
					livereload: true,
				},
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
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-delete-sync');
	grunt.loadNpmTasks('grunt-newer');
	grunt.loadNpmTasks('grunt-contrib-clean');


	//***** TASKS 
	grunt.registerTask('default', [
		'commit', 
		'copy:shims', 
		'copy:dist', 
		'sass:dev', 
		'autoprefixer', 
		'modernizr:dist', 
		'concat:dist', 
		'sass:dev', 
		'autoprefixer', 
		'delete_sync:dev', 
		'newer:imagemin:dynamic', 
		'svgmin:dist',
		'browserSync', 
		'watch'
	]);

	grunt.registerTask('deploy', [
		'commit', 
		'copy:shims', 
		'copy:dist', 
		'sass:dist', 
		'autoprefixer',
		'modernizr:dist', 
		'concat:dist',  
		'combine_mq', 
		'cssmin', 
		'uglify', 
		'delete_sync:dist', 
		'imagemin',
		'svgmin:dist'
	]);

	grunt.registerTask('commit', ['clean:reset']);

  
};