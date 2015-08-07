module.exports = function(grunt, options) {

	/**
   	* Define "new" tasks.
   	*
   	* grunt new --project=craftedpeople
   	*   Remove the existing site directory, make it again, and run build all this.
   	*/

   	grunt.registerTask('new', function(){

		var design_paths = [
			options.paths.src.assets + '/' + grunt.config("design"),
			options.paths.src.flats + '/' + grunt.config("design"),
			options.paths.src.themes + '/' + grunt.config("design"),
			options.paths.build.flat.root + '/' + grunt.config("design"),
			options.paths.build.dist.root + '/' + grunt.config("design")
		];

		design_paths.forEach(function(path){
			if(!grunt.file.isDir(path)) grunt.file.mkdir(path);
		});

   	});

}