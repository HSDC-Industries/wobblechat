const express = require('express');
const chatController = require('../controllers/chatController.js');
const router = express.Router();

//get request to search items with a keyword
router.get('/', chatController.getChats, (req, res) => {
  return res.status(200).json(res.locals.chats);
})

router.post('/', chatController.postChats, (req, res) => {
  return res.status(201).json(res.locals.chats);
})

module.exports = router;