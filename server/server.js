const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");
require('dotenv').config();
require("./dbConfig/dbConfig");
require("./cloudinaryConfig/cloudinaryConfig");
const { userRouter } = require("./routes/userRouter");
const { imageRouter } = require("./routes/imageRouter");
const app = express();
const { PORT } = process.env;
app.use(cors())
app.use(express.json({ limit: '100mb' }));
app.use("/", userRouter);
app.use("/image", imageRouter);
app.use("/.netlify/functions/app", userRouter);

app.listen(PORT, ()=> {
    console.log(`Server running at PORT: ${PORT}`)
})

module.exports.handler = serverless(app);
