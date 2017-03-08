'use strict';

const gulp = require('gulp');
const bump = require('gulp-bump');

// Bump npm versions with Gulp
gulp.task('bump', () =>
  gulp.src(['./../package.json', './../bower.json'])
    .pipe(bump({type: 'patch'}))
    .pipe(gulp.dest('./../'))
);
