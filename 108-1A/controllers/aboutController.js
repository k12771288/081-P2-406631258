const about = require("../models/about");

exports.getabout = async (req, res, next) => {
  try {
    let abouts;

    const getAll = await about.fetchAll().then(([rows]) => {
      abouts = rows;
    //   console.log("getPortfolios", JSON.stringify(rows));
    });
    //res.json(portfolios);
    res.render("about", {
      data: abouts,
    });
  } catch (err) {
    console.log(err);
  }
};
