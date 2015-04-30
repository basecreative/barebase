module.exports = {
    dev: {
    	options: {
    		beautify: true,
    	},
    	files: {
	        src: '<%= paths.build.flat.root %>/<%= grunt.config("design") %>/<%= paths.assets.js %>/core.js',
        	dest: '<%= paths.build.flat.root %>/<%= grunt.config("design") %>/<%= paths.assets.js %>/core.js'
        }
    },
    dist: {
    	options: {
    		compress: {
    			drop_console: true
    		}
    	},
    	files: {
	        src: '<%= paths.build.flat.root %>/<%= grunt.config("design") %>/<%= paths.assets.js %>/core.js',
        	dest: '<%= paths.build.flat.root %>/<%= grunt.config("design") %>/<%= paths.assets.js %>/core.js'
        }
    }
};
