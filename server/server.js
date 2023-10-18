const express = require("express");
require("./dbConfig/dbConfig");
const bodyParser = require("body-parser");
const { userRouter } = require("./routes/userRouter");

const app = express();
const PORT = 6500;

app.use(bodyParser.json());
app.use("/", userRouter);

app.listen(PORT, ()=> {
    console.log(`Server running at PORT: ${PORT}`)
})