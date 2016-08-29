# get-alexa-top-sites

Horribly inefficient method for parsing a 1 millon record CSV file and writing the top X records to a JSON file.

## Installation:

Install directly from GitHub, as this garbage isn't published to npm:

```sh
$ npm i pdehaan/get-alexa-top-sites -S
```

## Usage:

1. Download and unzip the uber CSV file from: https://s3.amazonaws.com/alexa-static/top-1m.csv.zip
2. Check out the test.js file for basic usage:

    ```js
const fs = require('fs');
const path = require('path');

const { getTopSites } = require('./index');

getTopSites('top-1m.csv', 100)
  .then((topSites) => {
    fs.writeFile(path.join('topsites', 'top-100.json'), JSON.stringify(topSites, null, 2));
    return topSites;
  })
  .catch((err) => console.error(err));
```

    This should write out a "topsites/top-100.json" file for you to play with, so you don't have to have the big performance hit of parsing the 22MB CSV file over and over (and instead you can use the 1.6KB JSON file).

**NOTE:** The current format of the CSV (and therefore generated JSON file) is that only the domain is returned, not the protocol. For example:

```js
[
  "google.com",
  "youtube.com",
  "facebook.com",
  "baidu.com",
  "yahoo.com",
   // ...
]
```

So if you're planning on using these URLs for anything interesting, you'll probably want to randomly prefix with "http://" or "https://" and roll the dice and see if each site responds to the randomly selected protocol.
