const pool = require("../db/connect");

const searchController = {};

searchController.getResults = (req, res, next) => {
  const queryString = `SELECT * FROM QUESTIONS, MESSAGES WHERE (TITLE LIKE $1) OR (DESCRIPTION LIKE $1) OR (CONTENT LIKE $1)`
  const { searchTerm } = req.body;
  const vals = [`%${searchTerm}%`]
  pool.query(queryString, vals)
    .then(data => {
      res.locals.searchResults = data.rows;
      return next();
    })
    .catch(err => {
      console.log(err)
      return next({
        status: 500,
        message: "Error conducting search query",
      })
    })
}


module.exports = searchController;