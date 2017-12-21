# gulp-delete-file

### Usage
Initially, install `gulp-delete-file` as a development dependency:


```
npm install --save gulp-delete-file
```
Then, create task using `gulp-delete-file`, which might look similar as below:

```
'use strict';
var gulp = require('gulp'),
	deletefile = require('gulp-delete-file');
gulp.task('deletefile', function () {
	var regexp = /\w*(\-\w{8}\.js){1}$|\w*(\-\w{8}\.css){1}$/;
	gulp.src(['./build/public/train/**/*.js',
		'./build/public/train/**/*.css',
		'./build/public/train/**/*.scss',
		'./build/public/train/**/*.less'
	]).pipe(deletefile({
		reg: regexp,
		deleteMatch: false
	}))
});

```

Finally, fire gulp task:

```
gulp deletefile

```
### API
`reg`：is a RegExp Object

`deleteMatch`:if the value is 'true',then the command will delete all the files which match the reg-rule. if it is 'false',then delete all the files which doesn't match the reg-rule.

### before Usage

```
├── _common
│   ├── bridge
│   ├── hybrid
│   ├── icons
│   ├── msg-f90a9a3d.js
│   ├── msg.js
│   ├── train-487d2c1f.css
│   ├── train-count-ad175de1.js
│   ├── train-count.js
│   ├── train.css
│   ├── train.scss
│   ├── utils-e3a5c9fc.js
│   ├── utils.js
│   └── vendors
	
```

### after usage

```
├── _common
│   ├── bridge
│   ├── hybrid
│   ├── icons
│   ├── msg-f90a9a3d.js
│   ├── train-487d2c1f.css
│   ├── train-count-ad175de1.js
│   ├── utils-e3a5c9fc.js
│   └── vendors
```

