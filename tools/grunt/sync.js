module.exports = {
    'build-src-wms-plugins': {
        files: [
            {
                cwd: '<%= paths.src.plugins %>',
                src: ['**'],
                dest: '<%= paths.build.dist.webroot %>/<%= paths.build.dist.plugins %>'
            }
        ],
//        verbose: true,
//        pretend: true, // Don't do any disk operations - just write log
//        ignoreInDest: "**/*.js", // Never remove js files from destination
        updateAndDelete: true // Remove all files from dest that are not found in src
    },
    'build-src-wms-themes': {
        files: [
            {
                cwd: '<%= paths.src.themes %>',
                src: ['**'],
                dest: '<%= paths.build.dist.webroot %>/<%= paths.build.dist.themes %>'
            }
        ],
//        verbose: true,
//        pretend: true, // Don't do any disk operations - just write log
//        ignoreInDest: "**/*.js", // Never remove js files from destination
        updateAndDelete: true // Remove all files from dest that are not found in src
    },
    'build-src-wms-scripts': {
        files: [
            {
                cwd: '<%= paths.src.scripts %>',
                src: ['**'],
                dest: '<%= paths.build.dist.webroot %>/<%= paths.build.dist.scripts %>'
            }
        ],
//        verbose: true,
//        pretend: true, // Don't do any disk operations - just write log
//        ignoreInDest: "**/*.js", // Never remove js files from destination
        updateAndDelete: true // Remove all files from dest that are not found in src
    }
};
