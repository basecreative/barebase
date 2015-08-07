"use strict";


module.exports = function(grunt) {
	// require it at the top and pass in the grunt instance
    //require('time-grunt')(grunt);

    var path = require('path');

    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'tools/grunt'),

        // auto grunt.initConfig
        init: true,

        data: {
            paths: {
                build: {
                    dist: {
                        root: 'build/dist',
                        plugins: 'content/plugins',
                        themes: 'content/themes',
                        scripts: 'content/scripts'
                    },
                    flat: {
                    	root: 'build/flat'
                    }
                },
                src: {
                    themes: 'src/themes',
                    flats: 'src/flats',
                    assets: 'src/assets'
                },
                assets: {
                	img: 'img',
                	scss: 'scss',
                	js: 'js',
                	fonts: 'fonts'
                }
            }
        },

    });
};