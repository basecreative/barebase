module.exports = {
	dev: {
		options: {
			keepBreaks: true,
			compatibility: 'ie8',
			keepSpecialComments: 1,
			relativeTo: 'dev'
		},
	    files: [{
	        expand: true,
	        cwd: 'build',
	        src: ['css/**.css', '!*.min.css'],
	        dest: 'build',
	        ext: '.css'
	    }]
	},
	dist: {
		options: {
			compatibility: 'ie8',
			keepSpecialComments: 1,
			relativeTo: 'dist'
		},
	    files: [{
	        expand: true,
	        cwd: 'build',
	        src: ['css/**.css', '!*.min.css'],
	        dest: 'build',
	        ext: '.css'
	    }]
	}
};
