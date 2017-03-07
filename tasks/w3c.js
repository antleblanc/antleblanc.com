'use strict';

const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');

const $ = gulpLoadPlugins();

// Testing files against the w3c html validator.
gulp.task('w3c', ['html'], () => {
  $.util.log(
    $.util.colors.gray.bgBlue('Testing files against the w3c html validator.')
  );

  gulp.src('dist/*.html')
    .pipe($.w3cjs());
});
