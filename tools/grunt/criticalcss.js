module.exports = {
    custom: {
        options: {
            url: "http://localhost:3000",
            width: 1200,
            height: 900,
            outputfile: '<%= paths.build.flat.root %>/<%= grunt.config("design") %>/css/critical.css',
            filename: '<%= paths.build.flat.root %>/<%= grunt.config("design") %>/css/style.css', // Using path.resolve( path.join( ... ) ) is a good idea here
            buffer: 800*1024,
            ignoreConsole: false
        }
    }
};
