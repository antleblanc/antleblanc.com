'use strict';

const gulp = require('gulp');
const size = require('gulp-size');
const critical = require('critical').stream;

// Generate & Inline Critical-path CSS
gulp.task('critical', () =>
  gulp.src('dist/index.html')
    .pipe(critical({
      base: 'dist/',
      inline: true,
      minify: true,
      css: ['dist/assets/styles/main.min.css']
    }))
    .pipe(gulp.dest('dist'))
    .pipe(size({title: 'critical'}))
);
