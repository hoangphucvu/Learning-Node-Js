var path = require('path');
var gulp = require('gulp');
var less = require('gulp-less');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');

gulp.task('css', function(){
	gulp.src('./less/styles.less').
	pipe(less({
		paths: [path.join(_dirname,'less','include')]
	})).
	pipe(gulp.dest('./static/css')).
	pipe(minifyCss({keepBreaks:true})).
	pipe(rename({suffix: '.min'})).
	pipe(gulp.dest('./static/css'));
});

gulp.task('watcher', function(){
	gulp.watch('less/**/*.less', ['css']);
});

gulp.task('default', ['css', 'watcher']);