/*
 Output jekyll site to /dist directory
*/

// node modules required
const gulp = require('gulp');
const jekyll = require('gulp-jekyll-stream');
const gutil = require('gulp-util');
const zip = require('gulp-zip');
const del = require('del');
const deletefile = require('gulp-delete-file');

const paths = {};
paths.src = process.cwd();
paths.dist = 'docs-dist';


gulp.task('docs-build', function() {
  const options = {
    bundleExec: true,
    config: '_config.yml,_config_build.yml'
  };
  
  del(paths.dist);
  
  // Run Jekyll
  return gulp.src(paths.src)
    .pipe(jekyll(options))
    .pipe(gulp.dest(paths.dist));    
});

gulp.task('docs-clean', ['docs-build'], function() {
  return del([
    paths.dist + '/*.xml',
    paths.dist + '/*.txt',
  ]);
});

gulp.task('docs-zip', ['docs-build', 'docs-clean'], function() {
  gulp.src(paths.dist + '/*')
    .pipe(zip(paths.dist + '.zip'))
    .pipe(gulp.dest(paths.src))
});

// error handling
var onError = function (error) {
  console.log(error.message);
  this.emit('end');
};

// gulp default task
gulp.task('default', ['docs-build', 'docs-clean', 'docs-zip']);