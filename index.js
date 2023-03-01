const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const passport = require("passport");

const auth = require("./auth");

const bookRoute = require("./routes/api/bookRoute");
const userRoute = require("./routes/api/userRoute");
const issueRoute = require("./routes/api/issueRoute");

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.use(bodyParser.json());

const mongoURI = require("./config/keys").mongoURI;

mongoose.connect(mongoURI)
  .then(() => {
    console.log("Connected to database");
})
  .catch((error) => {
    console.log(error);
});


app.use(passport.initialize());

app.use("/api/books", bookRoute);
app.use("/api/users", userRoute);
app.use("/api/issues", issueRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  })
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
