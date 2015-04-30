module.exports = {
    options: {
        browsers: ['last 5 versions', 'ie 8', 'ie 9']
    },
    multiple_files: {
    	// if no dest specified, files will be overwritten
        src: 'build/*/<%= grunt.config("design") %>/css/**.css'
    }
};
