module.exports = {
    dev: {
        options: {
            style: 'expanded',
            cacheLocation: '/.sass-cache'
        },
        files: {
            '<%= paths.build.flat.root %>/<%= grunt.config("design") %>/css/style.css': '<%= paths.src.assets %>/<%= grunt.config("design") %>/scss/style-flat.scss',
            '<%= paths.build.dist.root %>/<%= grunt.config("design") %>/css/style.css': '<%= paths.src.assets %>/<%= grunt.config("design") %>/scss/style-dist.scss',
            //'dist/css/editor_style.css': 'src/scss/editor_style.scss'
        }
    },
    dist: {
        options: {
            style: 'compressed',
            cacheLocation: '/.sass-cache',
            noCache: true,
            sourcemap: 'none'
        },
        files: {
            '<%= paths.build.flat.root %>/<%= grunt.config("design") %>/css/style.css': '<%= paths.src.assets %>/<%= grunt.config("design") %>/scss/style-flat.scss',
            '<%= paths.build.dist.root %>/<%= grunt.config("design") %>/css/style.css': '<%= paths.src.assets %>/<%= grunt.config("design") %>/scss/style-dist.scss',
            //'dist/css/editor_style.css': 'src/scss/editor_style.scss'
        }
    }
};
