var express = require("express");
var router = express.Router();

const portfolioController = require("../controllers/portfolioController");
const aboutController = require("../controllers/aboutController");


router.get("/", function(req, res, next) {
    res.render("freelancer")
});
router.get("/portfolio", portfolioController.getPortfolios);
router.get("/about", aboutController.getabout);
module.exports = router;
