const express = require("express");
const router = express.Router();
const linkController = require("../controllers/linkController");
var methodOverride = require('method-override')

router.use(methodOverride('_method'))

router.get("/" , linkController.allLinks)
router.get("/add" , (req , res) =>res.render("../templates/add.ejs" , {err: false, body:{}}))
router.get("/edit/:id" , linkController.loadLink)
router.get("/:title", linkController.redirect )

router.post("/" , express.urlencoded({extended: true}) , linkController.addLink)
router.post("/edit/:id" , express.urlencoded({extended: true}) , linkController.editLink)

router.delete("/:id" , linkController.deleteLink);
router.delete("/" , express.json() ,linkController.deleteLink);

module.exports = router;