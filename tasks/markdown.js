'use strict';

const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');

const $ = gulpLoadPlugins();

gulp.task('markdown', () =>
  gulp.src('dev/blog/posts/*.md')
    .pipe($.markdown())
    .pipe($.rename({extname: '.html'}))
    .pipe($.wrap({src: 'dev/blog/layouts/default.html'}))
    .pipe(gulp.dest('dist/blog'))
);
