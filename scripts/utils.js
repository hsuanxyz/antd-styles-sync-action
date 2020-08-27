const request = require('request');
const unzip = require('unzipper');
const fs = require('fs-extra');

const utils = {
  unzip(path, output) {
    return new Promise(resolve => {
      fs.createReadStream(path)
        .pipe(unzip.Extract({path: output}))
        .on('close', () => resolve())
    })
  },
  download(url, dest) {
    return new Promise(resolve => {
      request(url)
        .pipe(fs.createWriteStream(dest))
        .on('close', () => resolve())
    })
  }
};

module.exports = utils;
