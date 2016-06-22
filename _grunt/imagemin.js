module.exports = {
    dynamic: {
      files: [{
        expand: true,
        cwd: 'src/img/',
        src: ['**/*.{png,jpg,gif,svg}'],
        dest: 'dist/img/'
      }]
    }
}