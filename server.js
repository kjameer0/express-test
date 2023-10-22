const express = require("express");
const userRouter = require("./routes/users");
const app = express();

function logger(req, res, next) {
  console.log(req.originalUrl);
  next()
}
app.use(logger);
//view engine setter
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  console.log("hi");
  res.render("index");
});

app.use("/users", userRouter);

app.listen(3000);
