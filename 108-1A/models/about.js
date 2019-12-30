const aa = require("../utils/database");

const Portfolio = class Portfolio {
  constructor(id, name, pic, connect) {
    this.id = id;
    this.name = name;
    this.pic = pic;
    this.connect= connect;
  }

  static fetchAll() {
    return aa.execute("SELECT * FROM `1081-1a`.base");
  }
};

// TESTING
// const getPortfolios = async (req, res, next) => {
//   try {
//     let portfolios;
//     const getAll = await Portfolio.fetchAll().then(([rows]) => {
//       portfolios = rows;
//       console.log(JSON.stringify(rows));
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };
// getPortfolios();

module.exports = Portfolio;
