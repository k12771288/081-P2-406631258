const portfolio = require("../models/portfolio");

exports.getPortfolios = async (req, res, next) => {
  try {
    let portfolios;
    const getAll = await portfolio.fetchAll().then(([rows]) => {
      portfolios = rows;
    //   console.log("getPortfolios", JSON.stringify(rows));
    });
    //res.json(portfolios);
    res.render("portfolio", {
      data: portfolios,
      title: "Portfolio"
    });
  } catch (err) {
    console.log(err);
  }
};
