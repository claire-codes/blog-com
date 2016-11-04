var gulp = require('gulp'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin');
    
gulp.task('styles', function() {
  return cssnano()
    .pipe(gulp.dest('assets/css'));
});

gulp.task('images', function() {
  return gulp.src('assets/*')
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('assets/'));
});