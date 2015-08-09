module.exports = {
    dev: {
    	options: {
    		beautify: true,
    	},
    	files: {
            '<%= paths.build.flat.root %>/<%= grunt.task.current.args[0] %>/<%= paths.assets.js %>/core.js': [
                '<%= paths.build.flat.root %>/<%= grunt.task.current.args[0] %>/<%= paths.assets.js %>/core.js'
            ]
        }
    },
    dist: {
    	options: {
    		compress: {
    			drop_console: true
    		}
    	},
    	files: {
	        '<%= paths.build.dist.root %>/<%= grunt.task.current.args[0] %>/<%= paths.assets.js %>/core.js': [
                '<%= paths.build.dist.root %>/<%= grunt.task.current.args[0] %>/<%= paths.assets.js %>/core.js'
            ]
        }
    }
};
