/**
* clean task
**/
"use strict";

const gulp = require("gulp");
const config = require("../config").clean;
const del = require("del");

gulp.task('clean', function(done) {
	del(config);
	done();
});
