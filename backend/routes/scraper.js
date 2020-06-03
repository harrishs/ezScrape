const express = require("express");
const router = express.Router();

const scraperController = require("../controllers/scraper");

//Get all url entries
router.get("/", scraperController.getEntries);

//Add url entries to scraper
router.post("/", scraperController.postScraper);

//Get information about url
router.get("/:id", scraperController.getScraped);

//Edit url entry
router.post("/edit/:id", scraperController.postEditScrape);

//Delete entry
router.post("/delete/:id", scraperController.postDeleteScrape);

module.exports = router;
