module.exports = {
	options: {
		separator: ';',
	},
	dist: {
		src: ['src/js/lib/jquery.min.js', 'src/js/lib/jqueryui.min.js', 'src/js/lib/slick.js', 'src/js/lib/blazy.js', 'src/js/main.js'],
		dest: 'dist/js/application.js',
	},
}