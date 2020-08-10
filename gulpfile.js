const gulp = require('gulp')

const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const rename = require('gulp-rename')
const babel = require('gulp-babel')

gulp.task('concat-js', function() {
  return gulp.src('source/*.js')
    .pipe(concat('artitalk.js'))
    .pipe(gulp.dest('dist/js'))
});

gulp.task('minify-js', function() {
  return gulp.src('dist/js/artitalk.js')
    .pipe(babel({presets: ['env']}))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/js'))
});

gulp.task('default', gulp.series('concat-js', 'minify-js'));
