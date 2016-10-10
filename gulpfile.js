// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    pump = require('pump'),
    sass = require('gulp-sass'),
    jade = require('gulp-jade');

// Compile Jade templates
gulp.task('jade', function() {
  return gulp.src(['dev/templates/*.jade', 'dev/templates/**/*.jade'])
    .pipe(jade())
    .pipe(gulp.dest('prod'));
});

// Compile Our Sass
gulp.task('sass', function() {
  return gulp.src('dev/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dev/css/'));
});

// Minify CSS
gulp.task('minify-css', function() {
  return gulp.src(['dev/css/*.css', 'dev/css/modules/*.css'])
    .pipe(cleanCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('prod/css/'));
});

// Minify JS
gulp.task('compress', function (cb) {
    pump([
        gulp.src('dev/js/*.js'),
        uglify(),
        gulp.dest('prod/js/min/')
    ],
    cb
    );
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch(['dev/scss/**/*.scss', 'dev/scss/*.scss', 'dev/!scss/variables.scss', 'dev/!scss/mixins.scss'], ['sass']);
    gulp.watch('dev/css/*.css', ['minify-css']);
    gulp.watch('dev/js/*.js', ['compress']);
    gulp.watch(['dev/templates/*.jade', 'dev/templates/**/*.jade'], ['jade']);
});

// Default Task
gulp.task('dev', ['sass']);
