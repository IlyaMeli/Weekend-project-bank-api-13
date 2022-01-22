const express = require("express");
require("./db/mongoose");
const userRoute = require("./routes/user");
const UserModel = require("./models/users");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", userRoute);
const port = process.env.PORT || 5000;
app.use(express.json());
// const publicPath = path.join(__dirname, 'client/build');
// app.use(express.static(publicPath));
//


//
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(publicPath, "index.html"));
// });
//

app.listen(port, () => {
  console.log("listening on port " + port);
});