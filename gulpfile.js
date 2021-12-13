const { series } = require('gulp');
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return gulp.src('./lib/bootstrap-5.1.3/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./lib/bootstrap-5.1.3/dist/css'));
};
function buildStyles2() {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
};
function copy() { // copiam arxis pq mos funcioni es js a netlift //
  return gulp.src('./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js')
    .pipe(gulp.dest('./js'));
};

exports.compila = buildStyles;
exports.compila2 = buildStyles2;
exports.copy = copy;
exports.build = series(buildStyles2, copy);