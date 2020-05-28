const cheerio = require("cheerio");
const Scraper = require("../models/scraper");
const request = require("request");

exports.getEntries = (req, res, next) => {
  Scraper.find()
    .then((entries) => res.status(200).json({ data: entries }))
    .catch((err) => res.status(500).json({ error: err.message }));
};

exports.postScraper = (req, res, next) => {
  const { url, selector } = req.body;
  const scraper = new Scraper({ url, selector })
    .save()
    .then((entry) => res.redirect("localhost:3000"))
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};

exports.getScraped = (req, res, next) => {
  let scrapedData;
  const id = req.params.id;
  Scraper.findById(id)
    .then((entry) => {
      request(entry.url, (err, response, html) => {
        if (!err && response.statusCode == 200) {
          const $ = cheerio.load(html);
          const data = $(entry.selector);
          const out = data.text();
          scrapedData = out;
          console.log(scrapedData);
          res.status(200).json({ data: scrapedData });
        } else {
          res.status(500).json({ error: err.message });
        }
      });
    })
    .catch((err) => res.status(500).json({ error: err.message }));
};
