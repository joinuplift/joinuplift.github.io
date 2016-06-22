module.exports = {
  options: {
      prefix : 'icon-', // This will prefix each <g> ID
    },
    default : {
      files: {
        'dist/img/icons/svg-defs.svg': ['src/img/icons/*.svg'],
      }
    }
  }