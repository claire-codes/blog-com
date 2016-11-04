var gulp = require('gulp'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache');
    
gulp.task('styles', function() {
  return cssnano()
    .pipe(gulp.dest('assets/css'));
});

gulp.task('images', function() {
  return gulp.src('assets/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('assets/'));
});