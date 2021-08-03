const express = require('express');
const messageController = require('../controllers/message.js');
const router = express.Router();


//create new message where body comes from websocket
router.post('/', messageController.postMessage, (req,res) => {
  return res.status(200).json(res.locals.newMessage);
})

//create router to get messages
router.get('/:id', messageController.getMessages, (req,res) =>{
  return res.status(200).json(res.locals.messages);
})

module.exports = router;