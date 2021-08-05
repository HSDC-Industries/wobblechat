const express = require('express');
const searchController = require('../controllers/searchController.js');
const router = express.Router();

//get request to search items with a keyword
router.get('/:searchTerm', searchController.getResults, (req, res) => {
  return res.status(200).json(res.locals.searchResults);
})

module.exports = router;