module.exports = function(grunt, options) {

	/**
   	* Define "new" tasks.
   	*
   	* grunt new --project=craftedpeople
   	*   Remove the existing site directory, make it again, and run build all this.
   	*/

   	grunt.registerTask('new', function(){

   		grunt.task.run('bower:install');

		var design_paths = [
			options.paths.src.assets + '/' + grunt.config("design"),
			options.paths.src.assets + '/' + grunt.config("design") + '/' + options.paths.assets.scss,
			options.paths.src.assets + '/' + grunt.config("design") + '/' + options.paths.assets.img,
			options.paths.src.assets + '/' + grunt.config("design") + '/' + options.paths.assets.js,
			options.paths.src.assets + '/' + grunt.config("design") + '/' + options.paths.assets.fonts,
			options.paths.src.flats + '/' + grunt.config("design"),
			options.paths.src.themes + '/' + grunt.config("design"),
			options.paths.build.flat.root + '/' + grunt.config("design"),
			options.paths.build.dist.root + '/' + grunt.config("design")
		];

		// Create folders
		design_paths.forEach(function(path){
			if(!grunt.file.isDir(path)) grunt.file.mkdir(path);
		});

		// Check Sass
		if(!grunt.file.isFile(options.paths.src.assets + '/' + grunt.config("design") + '/' + options.paths.assets.scss + '/style.scss')){
			grunt.task.run('copy:sass_init');
		}

		// Check JavaScript
		if(!grunt.file.isFile(options.paths.src.assets + '/' + grunt.config("design") + '/' + options.paths.assets.js + '/core.js')){
			grunt.task.run('copy:js_init');
		}

		// Check HTML
		if(!grunt.file.isFile(options.paths.build.flat.root + '/' + grunt.config("design") + '/index.html')){
			grunt.task.run('copy:flat_init');
		}

   	});

}