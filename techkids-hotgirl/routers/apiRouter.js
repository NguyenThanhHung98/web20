const express = require("express");
const Router = express.Router;

const apiRouter = Router();

const imagesApiRouter = require("./imagesApiRouter")

const usersApiRouter = require("./usersApiRouter");

const commentsApiRouter = require("./commentsApiRouter");

//localhost:6969/api =>Hello
apiRouter.get("", (req,res) =>{
    res.send("Hello");
})

apiRouter.use("/images", imagesApiRouter)

apiRouter.use("/users", usersApiRouter)

apiRouter.use("/comments", commentsApiRouter)

module.exports = apiRouter;