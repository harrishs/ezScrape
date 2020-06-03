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
          res.status(200).json({
            data: scrapedData,
            url: entry.url,
            selector: entry.selector,
          });
        } else {
          res.status(500).json({ error: err.message });
        }
      });
    })
    .catch((err) => res.status(500).json({ error: err.message }));
};

exports.postEditScrape = (req, res, next) => {
  const id = req.params.id;
  const { url, selector } = req.body;
  Scraper.findByIdAndUpdate(id, { url: url, selector: selector })
    .then((entry) => {
      res.status(200).json({ data: entry });
    })
    .catch((err) => res.status(500).json({ error: err.message }));
};

exports.postDeleteScrape = (req, res, next) => {
  const id = req.params.id;
  Scraper.findByIdAndDelete(id)
    .then((entry) => res.status(200).json({ data: "deleted" }))
    .catch((err) => res.status(500).json({ error: err.message }));
};
