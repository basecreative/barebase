module.exports = function(grunt, options) {

	   /**
   	* Set project to work on.
   	*
   	* grunt work:dev:craftedpeople
   	*   Remove the existing site directory, make it again, and run build all this.
   	*/

   	grunt.registerTask('work', function(mode, name){

         // Check available methods
         if(mode !== "dev" && mode !== "deploy"){
            grunt.fail.fatal("Sorry mate, '" + mode + "' mode is not an option.");
         }

   		// If no option, no nothing
	   	if(typeof name != 'string'){
	   		grunt.fail.fatal("I need a project name: Give me one with grunt work:dev:design_name");
	   	}else{
	   		grunt.config.set('design', name);
            grunt.task.run('clean:reset', 'new');

            if(mode === "dev") grunt.task.run('dev');
            //if(mode === "deploy") grunt.task.run('build'); 
   		}
   	});

}