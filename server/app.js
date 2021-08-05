const express = require("express");
const app = express();
const socketApp = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
// const socketPort = 8000;
// const { emit } = require("process");
const server = require("http").createServer(socketApp);
const NEW_MESSAGE_EVENT = "new-message-event";

const io = require("socket.io")(server, {
  cors: true,
  origins:["localhost:3001"]
});



//import routers
const debugRouter = require("./routers/debug.js");
const userRouter = require("./routers/userRouter.js");
const globalErrorHandler = require("./routers/errors");
const questionRouter = require("./routers/questionRouter.js");
const messageRouter = require("./routers/messageRouter.js");
const searchRouter = require("./routers/searchRouter.js");
const chatRouter = require("./routers/chatRouter.js");

app.use(cors());
//parsing request body
app.use(express.json());
app.use(cookieParser());
if (process.env.NODE_ENV === "development") app.use(debugRouter);

const room = "general"

io.on("connect", (socket) => {
  socket.join(room);

  socket.on(NEW_MESSAGE_EVENT, (data) => {
    io.in(room).emit(NEW_MESSAGE_EVENT, data);
  });

  socket.on("disconnect", () => {
    socket.leave(room);
  });
});

app.get("/api/hello", (req, res) => {
  res.status(200).json({ hello: "world" });
});

app.use("/api/users", userRouter);
app.use("/api/questions", questionRouter);
app.use("/api/messages", messageRouter);
app.use("/api/search", searchRouter);
app.use('/api/chat', chatRouter);

// //route handler for main page
// app.get('/', (req,res) => {
//   res.sendFile(path.resolve(__dirname, '../client/index.html'));
// });

app.use(globalErrorHandler); // Added global error middlware
app.listen(3000, () => {
  console.log("Express server listening on port 3000.");
});

server.listen(3001, () => {
  console.log("Socket server listening on port 3001.");
})
