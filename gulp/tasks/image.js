/*
 * ----------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <HakunaMacouta> wrote this file.  As long as you retain this notice you
 * can do whatever you want with this stuff. If we meet some day, and you think
 * this stuff is worth it, you can buy me a beer in return.   Thomas Blanc
 * ----------------------------------------------------------------------------
 */

const  gulp = require("gulp");
const  $ = require("gulp-load-plugins")();
const config = require("../config").image;

gulp.task('image', function () {
	return gulp.src(config.src)
		.pipe($.imagemin())
		.pipe(gulp.dest(config.dest));
});