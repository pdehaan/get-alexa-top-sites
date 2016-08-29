const fs = require('fs');
const path = require('path');

const { getTopSites } = require('./index');

// Download the top-1m.csv via https://s3.amazonaws.com/alexa-static/top-1m.csv.zip
// Ref: https://support.alexa.com/hc/en-us/articles/200461990-Can-I-get-a-list-of-top-sites-from-an-API-

getTopSites('top-1m.csv', 100)
  .then((topSites) => {
    fs.writeFile(path.join('topsites', 'top-100.json'), JSON.stringify(topSites, null, 2));
    return topSites;
  })
  .catch((err) => console.error(err));
