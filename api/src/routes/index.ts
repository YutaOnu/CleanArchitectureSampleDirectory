var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req: any, res: any, next: any) {
  console.log("====index====");
  res.render("aa", { title: "ss" });
});
module.exports = router;
