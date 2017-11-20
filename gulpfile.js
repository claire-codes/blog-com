var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    sourcemaps = require('gulp-sourcemaps')
    cssnano = require('gulp-cssnano'),
    uncss = require('gulp-uncss'),
    sassLint = require('gulp-sass-lint');

gulp.task('css', function() {
    gulp.src('scss/pixyll.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(uncss({
            html: ['_site/**/*.html'],
            ignore: ['.animate-post', '.show-post']
        }))
        .pipe(gulp.dest('css/'))
        .pipe(rename({suffix: '.min'}))
        .pipe(cssnano())
        .pipe(sourcemaps.write('./'))
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

gulp.task('uncss', function () {
    return gulp.src('css/pixyll.css')
        .pipe(uncss({
            html: ['_site/**/*.html']
        }))
        .pipe(rename('pixyll-uncss.css'))
        .pipe(gulp.dest('css/'));
});


gulp.task('sass-lint', function () {
  return gulp.src('_sass/**/*.s+(a|c)ss')
    .pipe(sassLint({
       configFile: '.sass-lint.yml'
     }))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});