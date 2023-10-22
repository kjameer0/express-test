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
    res.send("User id:" + req.params.id);
  })
  .put("/:id", (req, res) => {
    res.send("Change id:" + req.params.id);
  })
  .delete("/:id", (req, res) => {
    res.send("Delete id:" + req.params.id);
  });

module.exports = router;
