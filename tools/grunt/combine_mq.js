module.exports = {
    dev: {
        options: {
            beautify: false
        },
        expand: true,
		cwd: 'build',
		src: ['*/<%= grunt.config("design") %>/css/**.css', '!*.min.css'],
		dest: 'build'
    }
};
