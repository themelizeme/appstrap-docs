'use strict';

var Stream = require('stream');
var Path = require('path');
var Fs = require('fs')

function gulpDeleteFile(option) {
	var option = option || {};

	var stream = new Stream.Transform({
		objectMode: true
	});

	function parsePath(path) {

		return {
			dirname: Path.dirname(path),
			basename: Path.basename(path)
		};
	}

	stream._transform = function (file, unused, callback) {
		var parsedPath = parsePath(file.relative);
		var regexp = new RegExp(option.reg);

		function deletefile(path) {
			Fs.unlink(path, function (err) {
				if (err) {
					throw err;
				}
				console.log(path + ' file has deleted!')
			})
		}

		if (option.deleteMatch) {
			if (regexp.test(parsedPath.basename)) {
				deletefile(file.path)
			}
		} else {
			if (!regexp.test(parsedPath.basename)) {
				deletefile(file.path)
			}
		}
		callback();
	};

	return stream;
}

module.exports = gulpDeleteFile;