const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes/TaskRoute")
const cors = require("cors");
;

require("dotenv").config();

const PORT = process.env.PORT | 5000;

app.use(express.json());
app.use(cors());
 
//create coonection databse

mongoose.connect(process.env.MONGO_URI)
    .then(()=> console.log("connected to mongodb"))
    .catch(()=> console.log(err));

    app.use("/api",routes);

app.listen(PORT, ()=> console.log(`listeing on port ${PORT}`));