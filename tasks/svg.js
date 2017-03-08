'use strict';

const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');

const $ = gulpLoadPlugins();

const config = {
  mode: {
    symbol: {
      sprite: 'sprite.svg',
      example: true
    }
  },
  svg: {
    xmlDeclaration: false,
    doctypeDeclaration: false
  }
};

gulp.task('svg', () => {
  gulp.src([
    'app/assets/svg/**/*.svg',
    '!app/assets/svg/sprite-skills.svg'
  ])
    .pipe($.svgmin())
    .pipe(gulp.dest('dist/assets/svg'));
});

gulp.task('svg:sprite', () => {
  gulp.src([
    'app/assets/svg/skills/*.svg'
  ])
    .pipe($.svgSprite(config))
    .pipe(gulp.dest('.tmp/assets/svg'));
});
