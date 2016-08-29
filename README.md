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

const { getTopSites } = require('get-alexa-top-sites');

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

<details>
<summary>**TL;DR: Top 100 Sites**</summary>
```json
[
  "google.com",
  "youtube.com",
  "facebook.com",
  "baidu.com",
  "yahoo.com",
  "amazon.com",
  "wikipedia.org",
  "qq.com",
  "twitter.com",
  "google.co.in",
  "live.com",
  "taobao.com",
  "google.co.jp",
  "bing.com",
  "sina.com.cn",
  "instagram.com",
  "linkedin.com",
  "weibo.com",
  "yahoo.co.jp",
  "msn.com",
  "vk.com",
  "google.de",
  "yandex.ru",
  "hao123.com",
  "google.co.uk",
  "reddit.com",
  "ebay.com",
  "google.fr",
  "t.co",
  "tmall.com",
  "google.com.br",
  "pinterest.com",
  "google.ru",
  "amazon.co.jp",
  "mail.ru",
  "sohu.com",
  "360.cn",
  "netflix.com",
  "google.it",
  "onclickads.net",
  "google.es",
  "microsoft.com",
  "gmw.cn",
  "paypal.com",
  "wordpress.com",
  "tumblr.com",
  "blogspot.com",
  "imgur.com",
  "chinadaily.com.cn",
  "naver.com",
  "stackoverflow.com",
  "aliexpress.com",
  "github.com",
  "apple.com",
  "xvideos.com",
  "google.com.mx",
  "ok.ru",
  "163.com",
  "imdb.com",
  "pornhub.com",
  "google.co.kr",
  "jd.com",
  "fc2.com",
  "google.com.hk",
  "whatsapp.com",
  "google.ca",
  "blogger.com",
  "xhamster.com",
  "amazon.in",
  "youth.cn",
  "office.com",
  "google.com.tr",
  "google.co.id",
  "rakuten.co.jp",
  "craigslist.org",
  "amazon.de",
  "nicovideo.jp",
  "google.pl",
  "youku.com",
  "bilibili.com",
  "bongacams.com",
  "pixnet.net",
  "booking.com",
  "alibaba.com",
  "dropbox.com",
  "soso.com",
  "google.com.au",
  "google.com.tw",
  "alipay.com",
  "outbrain.com",
  "googleusercontent.com",
  "popads.net",
  "amazon.co.uk",
  "diply.com",
  "microsoftonline.com",
  "zhihu.com",
  "cnn.com",
  "xinhuanet.com",
  "coccoc.com",
  "chase.com"
]
```
</details>

