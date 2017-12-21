var fs = require('fs');
var path = require('path');
var through2 = require('through2');
var replaceExt = require('replace-ext');

function cleanDest(outFolder, opts) {
  opts = opts || {};
  opts.cwd = opts.cwd || process.cwd();	

  function cleanFile(file, encoding, callback) {
    var filePath = path.resolve(opts.cwd, outFolder, file.relative);

    if (opts.extension) {
      filePath = replaceExt(filePath, opts.extension);
    }

    fs.unlink(filePath, function() { callback(null, file); });
  }
  var stream = through2.obj(cleanFile);
  stream.resume();
  return stream;
}

module.exports = cleanDest;
