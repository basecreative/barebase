module.exports = function(grunt, options) {
    return {
        sass_init: {
            files: [
                {
                    expand: true,
                    cwd: 'node_modules/barebase-sass',
                    src: ['**/**.*', '**.*', '!LICENSE', '!README.md', '!package.json'],
                    dest: '<%= paths.src.assets %>/<%= grunt.config("design") %>/<%= paths.assets.scss %>'
                }
            ],
            updateAndDelete: false
        },
        js_init: {
            files: [
                {
                    expand: true,
                    cwd: 'node_modules/barebase-js',
                    src: ['**/**.*', '**.*', '!LICENSE', '!README.md', '!package.json'],
                    dest: '<%= paths.src.assets %>/<%= grunt.config("design") %>/<%= paths.assets.js %>'
                }
            ],
            updateAndDelete: false
        },
        flat_init: {
            files: [
                {
                    expand: true,
                    cwd: 'node_modules/barebase-flat',
                    src: ['**/**.*', '**.*', '!LICENSE', '!README.md', '!package.json'],
                    dest: '<%= paths.src.flats %>/<%= grunt.config("design") %>'
                }
            ],
            updateAndDelete: false
        }
    }
};