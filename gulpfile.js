/*
 Output jekyll site to /dist directory
*/

// node modules required
const gulp = require('gulp');
const jekyll = require('gulp-jekyll-stream');
const gutil = require('gulp-util');
var del = require('del');
var deletefile = require('gulp-delete-file');

var paths = {};
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
  del([
    paths.dist + '/*.xml',
    paths.dist + '/*.txt',
  ]);
});

// error handling
var onError = function (error) {
  console.log(error.message);
  this.emit('end');
};

// gulp default task
gulp.task('default', ['docs-build', 'docs-clean']);