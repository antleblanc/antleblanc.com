/* eslint camelcase: [2, {properties: "never"}] */

'use strict';

const gulp = require('gulp');
const favicons = require('gulp-favicons');
const del = require('del');
const pkg = require('./../package.json');

// Generate favicons
gulp.task('favicons:clean', () => del(['app/assets/images/favicons']));

gulp.task('favicons:generate', ['favicons:clean'], () =>
  gulp.src('media/favicon.png')
    .pipe(favicons({
      appName: pkg.name,
      appDescription: pkg.description,
      developerName: pkg.author.name,
      developerURL: pkg.author.url,
      background: '#434343',
      path: 'assets/images/favicons/',
      url: pkg.homepage,
      display: 'standalone',
      orientation: 'portrait',
      version: pkg.version,
      logging: true,
      online: false,
      replace: false,
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: false,
        opengraph: true,
        twitter: true,
        windows: true,
        yandex: true
      }
    }))
    .pipe(gulp.dest('./app/assets/images/favicons'))
);

gulp.task('favicons', () =>
  gulp.start('favicons:generate')
);
