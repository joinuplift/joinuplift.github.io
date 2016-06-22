module.exports = {
	css: {
		files: 'src/scss/**/*.scss', 
		tasks: ['sass'],
	},
	images: {
		files: 'src/img/**/*.{png,jpg,gif,svg}',
		tasks: ['newer:imagemin:dynamic'],
	},
	uglify: {
		files: 'src/js/**/*.js',
		tasks: ['concat']
	}
}