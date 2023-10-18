const express = require("express");
require('dotenv').config();
require("./dbConfig/dbConfig");
const { userRouter } = require("./routes/userRouter");
const app = express();
const { PORT } = process.env;

app.use(express.json());
app.use("/", userRouter);

app.listen(PORT, ()=> {
    console.log(`Server running at PORT: ${PORT}`)
})