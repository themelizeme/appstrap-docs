gulp-clean-dest
===============

A gulp plugin for removing files from the dest directory prior to building.

### Installation

    npm install --save-dev gulp-clean-dest

### Example Use Case

Say you have a "src" directory containing javascript source files with Flow type annotations and a gulp watch task that strips the type annotations and puts the resulting javasript files in the "out" directory.

If you edit a file in "src" and introduce a syntax error, the watch task will fail. Normally, the previous version of the file will still exist in the "out" directory, which could be very confusing if you aren't paying attention to the watch task and it looks like your edits had no effect.

Using this plugin, you can ensure that the "out" directory won't contain code that is out of sync with the the "src" directory because it will delete the file in the "out" directory that corresponds to the changed file before stripping.

### Example Gulpfile.js

    var gulp = require('gulp');
    var watch = require('gulp-watch');
    var react = require('gulp-react');
    var cleanDest = require('gulp-clean-dest');

    gulp.task('watch', function() {
      return gulp.src('src/*.js')
        .pipe(watch('src/*.js'))
        .pipe(cleanDest('out'))
        .pipe(react({ stripTypes: true }))
        .pipe(gulp.dest('out'));
    });


## API

### cleanDest(destination, options)

#### destination

Type: `string`, `function`

The destination directory. Same as you put into `gulp.dest()`.

#### options

##### cwd

Type: `string`
Default: `process.cwd()`

The working directory the folder is relative to.

##### extension

Type: `string`

Extension of the destination files.

Useful if it differs from the original, like in the example below:

```js
gulp.task('jade', () => {
    return gulp.src('src/**/*.jade')
        .pipe(cleanDest('app', {extension: '.html'}))
        .pipe(jade())
        .pipe(gulp.dest('app'))
});
```
