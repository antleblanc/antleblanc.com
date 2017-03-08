'use strict';

const gulp = require('gulp');
const pagespeed = require('psi').output;
const pkg = require('./../package.json');

// Run PageSpeed Insights
gulp.task('pagespeed', cb =>
  pagespeed(pkg.homepage, {
    strategy: 'mobile'
  }, cb)
);
