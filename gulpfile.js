var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    uglifycss = require('gulp-uglifycss');
    
gulp.task('css', function() {
    gulp.src('scss/pixyll.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css/'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglifycss())
        .pipe(gulp.dest('css/'));
});

gulp.task('images', function() {
  return gulp.src('assets/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('assets/'));
});

gulp.task('default', [], function() {
    gulp.start('css', 'images');
});