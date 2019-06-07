var gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
// var webpack = require('webpack');

gulp.task('es6', () => {

	return gulp.src('./src/core/**/*.js')
		.pipe(babel({
			presets: ['@babel/env']
		}))
    // .pipe(concat('valid88.js'))
		.pipe(gulp.dest('./build'));

});