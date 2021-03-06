module.exports = function(grunt, options) {

	/**
   	* Define "new" tasks.
   	*
   	* grunt new --project=craftedpeople
   	*   Remove the existing site directory, make it again, and run build all this.
   	*/

   	grunt.registerTask('new', function(name){

   		if(typeof name != 'string'){
	   		grunt.fail.fatal("I need a project name: Give me one with grunt work:dev:design_name");
	   	}else{
	   		grunt.config.set('design', name);

			var design_paths = [
				'src',
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

			grunt.task.run('sync:sass_init', 'sync:js_init', 'sync:flat_init');
		}

   	});

}