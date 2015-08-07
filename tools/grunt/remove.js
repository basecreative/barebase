module.exports = function(grunt, options) {

	   /**
   	*   Set project to work on.
   	*
   	*   grunt work:remove:test
   	*   Remove the existing site directory, make it again, and run build all this.
   	*/

   	grunt.registerTask('remove', function(name){

   		// If no option, no nothing
	   	if(typeof name != 'string'){
	   		grunt.fail.fatal("I need a project name: Give me one with grunt work:remove:design_name");
	   	}else{
	   		grunt.config.set('design', name);
            grunt.task.run('clean:design');
   		}
   	});

}