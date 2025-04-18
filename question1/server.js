require("dotenv").config();


const express = require("express");
const app = express();

const allRoutes = require("./routes/allRoutes")

app.use('/',allRoutes)


app.listen(5000, () => {
  console.log("listening on port 5000");
});
