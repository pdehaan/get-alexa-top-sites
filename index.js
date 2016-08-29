const fs = require('fs');

const csvParse = require('csv-parse');

exports.getTopSites = getTopSites;

function getTopSites(csv, count=100) {
  return new Promise((resolve, reject) => {
    const parser = csvParse((err, data) => {
      if (err) {
        return reject(err);
      }
      const topSites = data.slice(0, count).map(([idx, name]) => name);
      resolve(topSites);
    });

    fs.createReadStream(csv)
      .pipe(parser);
  });
}
