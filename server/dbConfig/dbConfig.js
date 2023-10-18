const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://dhananjay:MLjHG2u80y6YfndE@cluster0.q22nhjy.mongodb.net/webmaster?retryWrites=true&w=majority")
.then(()=> console.log("database connected"))
.catch(err => console.log(err))