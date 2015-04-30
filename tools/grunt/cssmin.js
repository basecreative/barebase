module.exports = {
    files: {
        expand: true,
        cwd: 'build',
        src: ['css/**.css', '!*.min.css'],
        dest: 'build',
        ext: '.css'
    }
};
