const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("All Users");
});

router.get("/new", (req, res) => {
  res.send("User new form");
});

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send("User id:" + req.params.id);
  })
  .put((req, res) => {
    res.send("Change id:" + req.params.id);
  })
  .delete((req, res) => {
    res.send("Delete id:" + req.params.id);
  });
//this param thing runs before the routes above
const users = [{ name: "kyle" }, { name: "sally" }];
router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});
module.exports = router;
