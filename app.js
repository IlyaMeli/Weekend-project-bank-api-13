const express = require("express");
require("./db/mongoose");
const userRoute = require("./routes/user");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(express.json());
app.use("/", userRoute);

//
const dotenv = require("dotenv");
dotenv.config();

const PASSWORD = process.env.PASSWORD;
console.log(PASSWORD);
//
const port = process.env.PORT || 5000;

const publicPath = path.join(__dirname, "client/build"); //www.ilyaRoot/client/bulid
app.use(cors());
app.use(express.static(publicPath));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(publicPath, "index.html"));
});

app.listen(port, () => {
  console.log("listening on port " + port);
});
