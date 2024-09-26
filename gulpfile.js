const gulp = require('gulp');
const zip = require('gulp-zip');
const del = require('del');
const { exec } = require('child_process');
const browserSync = require('browser-sync').create();  // Import BrowserSync

const paths = {
  dist: '_site'
};

// Clean task to clear the dist folder
gulp.task('clean', function() {
  return del([paths.dist]).then(() => {
    console.log('Dist folder cleaned.');
  });
});

// Build task using Jekyll directly
gulp.task('docs-build', gulp.series('clean', function(done) {
  exec('bundle exec jekyll build --config _config.yml,_config_build.yml', function(err, stdout, stderr) {
    console.log(stdout);
    console.error(stderr);
    done(err);
  });
}));

// Zip task after building
gulp.task('docs-zip', gulp.series('docs-build', function() {
  const zipFileName = 'appstrap-docs.zip'; // Set the desired zip file name here
  console.log('Starting zip task...');
  return gulp.src(paths.dist + '/**/*')
    .pipe(zip(zipFileName))  // Specify the custom zip file name
    .on('error', function(err) {
      console.error('Zip error:', err.message);
    })
    .pipe(gulp.dest('.'))  // Save zip file in the current directory
    .on('end', function() {
      console.log('Zip task completed. Zip file created:', zipFileName);
    });
}));

// Serve Jekyll and use Browsersync for live reloading
gulp.task('serve', function(cb) {
  // Start Jekyll server
  const jekyll = exec('bundle exec jekyll serve --livereload', function(err, stdout, stderr) {
    console.log(stdout);
    console.error(stderr);
    cb(err);
  });

  // Wait until Jekyll has fully started
  jekyll.stdout.on('data', function(data) {
    if (data.includes('Server running')) {
      console.log('Jekyll is up, starting BrowserSync...');
      
      // Initialize BrowserSync
      browserSync.init({
        proxy: "http://127.0.0.1:4000",  // Proxy Jekyll's server
        port: 3000,                      // Serve BrowserSync at port 3000
        files: ["_site/**/*"]            // Watch Jekyll's output folder
      });
    }
  });
});

// Watch task with BrowserSync reloading
gulp.task('watch', function() {
  gulp.watch(
    ['_layouts/*.html', '_includes/*.html', '*.html', '*.md', '_config.yml', 'assets/css/*.scss', '_sass/**/*.scss'],
    gulp.series('docs-build', function(done) {
      browserSync.reload();
      done();
    })
  );
});

// Combine watch and serve tasks
gulp.task('watch-serve', gulp.parallel('watch', 'serve'));

// Default task (runs clean, build, zip sequentially)
gulp.task('default', gulp.series('docs-build', 'docs-zip'));

// Error handling function
function onError(error) {
  console.log(error.message);
  this.emit('end');
}
