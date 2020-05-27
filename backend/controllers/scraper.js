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
  const id = req.params.id;
  Scraper.findById(id)
    .then((res) => {
      request(res.url, (err, response, html) => {
        if (!err && response.statusCode == 200) {
          const $ = cheerio.load(html);
          const data = $(res.selector);
          const out = data.text();
          console.log(out);
        } else {
          res.status(500).json({ error: err.message });
        }
      });
    })
    .catch((err) => res.status(500).json({ error: err.message }));
};
