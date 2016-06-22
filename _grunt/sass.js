module.exports = {
  dist: {
    options: {
      style: 'expanded',
      sourceMap: true
    },
    files: {
      '_site/assets/css/style.css': '_src/sass/index.scss',
    }
  }
}