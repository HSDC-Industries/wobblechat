const { Router } = require("express");
const userController = require("../controllers/userController");
const cookieController = require("../controllers/cookieController");
const questionController = require("../controllers/questionController");

const userRouter = Router();

userRouter.post(
  "/signup",
  userController.createUser,
  cookieController.setCookies,
  (_req, res) => {
    res.status(200).send({ id: res.locals.id });
  }
);

userRouter.post(
  "/login",
  userController.loginUser,
  cookieController.setCookies,
  (_req, res) => {
    res.status(200).send({ id: res.locals.id });
  }
);

// Eliminates cookie and sends user back to home page.
userRouter.post(
  "/logout",
  cookieController.unsetCookies,
  (_req, res) => {
    res.status(200).redirect("/");
  }
);


module.exports = userRouter;
