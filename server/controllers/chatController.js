const pool = require("../db/connect");

const chatController = {};

chatController.getChats = (req, res, next) => {
  const chatQuery = 'SELECT * FROM chats ORDER BY id DESC LIMIT 10'
  pool.query(chatQuery)
    .then(data => {
      res.locals.chats = data.rows
      return next();
    })
    .catch(err => {
      return next({
        status: 500,
        message: "Error querying Chats",
      });
    })
}

chatController.postChats = (req, res, next) => {
  const { ssid } = req.cookies;
  const { text } = req.body;
  const dateCreated = new Date().toLocaleString();
  const postQuery = 'INSERT INTO chats (dateCreated, content, creator) VALUES ($1, $2, $3) RETURNING dateCreated, content, creator'
  const vals = [dateCreated, text, ssid];
  pool.query(postQuery, vals)
    .then(data => {
      res.locals.chats = data.rows;
      return next();

    })
    .catch(err => {
      return next({
        status: 500,
        message: "Error posting Chats",
      });
    })

}

/* SOCKET DB */
chatController.getSocketMessages = () => {
  return new Promise((resolve) => {
    const getQuery = 'SELECT * FROM chats ORDER BY id DESC LIMIT 10'
    pool.query(getQuery)
      .then(data => {
        resolve(data.rows);
      })
      .catch(err => {
        return next({
          status: 500,
          message: "Error getting Chats",
        });
      })
  })
}

chatController.createSocketMessage = (message) => {
  return new Promise((resolve) => {
    pool.query(
       "INSERT INTO chats (content, dateCreated, creator) VALUES ($1, $2, $3) RETURNING content, dateCreated, creator",
       [message.text, new Date().toLocaleString(), message.username],
       (error, results) => {
          if (error) {
             throw error;
          }
          resolve(results.rows);
       }
    );
 });

}

module.exports = chatController;