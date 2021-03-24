let Parser = require('rss-parser');
let parser = new Parser();

(async () => {

  let feed = await parser.parseURL('https://anchor.fm/s/101565e8/podcast/rss');
  console.log(feed.title);

  feed.items.forEach(item => {
  
      console.log(item)
  });

})();
