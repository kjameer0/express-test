const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("All Users");
});

router.get("/new", (req, res) => {
  res.render("users/new", { firstName: "test1" });
});

router.post("/", (req, res) => {
  const isValid = true;
  if (isValid) {
    //add data to data pool
    users.push({ firstName: req.body.firstName });
    //redirect to user page
    res.redirect("/users/" + String(users.length - 1));
    console.log(users);
  } else {
    console.log("bad");
    res.render("users/new");
  }
});

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send("User id:" + req.params.id + req.user.firstName);
  })
  .put((req, res) => {
    res.send("Change id:" + req.params.id);
  })
  .delete((req, res) => {
    res.send("Delete id:" + req.params.id);
  });
const users = [{ firstName: "kyle" }, { firstName: "sally" }];
//this param thing runs before the routes above
router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});
module.exports = router;
