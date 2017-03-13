/* eslint-disable import/no-unresolved */
'use strict';

const gulp = require('gulp');
const rsync = require('gulp-rsync');
const config = require('./../config.json');
const pkg = require('./../package.json');

gulp.task('deploy', ['default'], () => {
  return gulp.src('dist/**')
    .pipe(rsync({
      root: 'dist',
      hostname: pkg.author.url,
      username: config.username,
      port: config.port,
      incremental: true,
      progress: true,
      compress: true,
      destination: config.destination
    }));
});
/* eslint-enable import/no-unresolved */
