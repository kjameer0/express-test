const express = require("express");
const userRouter = require("./routes/users");
const app = express();
app.use(logger);
app.use(express.static('public'))

app.get("/", logger, (req, res) => {
  console.log("hik");
  res.render("gi");
});
app.set("view engine", "ejs");
//view engine setter

app.use("/users", userRouter);
function logger(req, res, next) {
  console.log(req.originalUrl);
  next()
}
app.listen(3000);
