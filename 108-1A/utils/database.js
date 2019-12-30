const mysql = require("mysql2");
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "0000",
  database: "1081-1a"
});
// //Testing database connection
// pool.query("SELECT * FROM `1081-1a`.portfolio", function(err, results) {
//   console.log("database", JSON.stringify(results)); // results contains rows returned by server
//   console.log("Database 1081-1a connected.");
// });

module.exports = pool.promise();
