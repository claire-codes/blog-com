var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache');
    
gulp.task('styles', function() {
    gulp.src('css/pixyll.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css/'))
        .pipe(rename({suffix: '.min'}))
        .pipe(cssnano())
        .pipe(gulp.dest('css/'));
});

gulp.task('images', function() {
  return gulp.src('assets/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('assets/'));
});

gulp.task('default', [], function() {
    gulp.start('styles', 'images');
});