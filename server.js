const express = require("express");
const userRouter = require("./routes/users");
const app = express();
app.use(logger);
app.use(express.static('public'))
//allows req.body
app.use(express.urlencoded({extended: true}))

app.get("/", logger, (req, res) => {
  console.log("hik");
  res.send("index");
});
//view engine setter
app.set("view engine", "ejs");

app.use("/users", userRouter);
function logger(req, res, next) {
  console.log(req.originalUrl);
  next()
}
app.listen(3000);
