var db = require("../models");
var express = require("express");
var router = express.Router();


router.get("/", function(req, res) {
    console.log("TRYING TO GET");
    db.Burger.findAll().then(function(dbPost) {
        var hbsObject = {
            burgers: dbPost
        };
        res.render("index", hbsObject);
    });
});

router.post("/", function(req, res) {
    db.Burger.create(req.body).then(function(dbPost) {
        res.redirect("/");
    });
});

router.put("/:id", function(req, res) {
    db.Burger.update(
        req.body, {
            where: {
                id: req.params.id
            }
        }).then(function(dbPost) {
        res.redirect("/");
    });
});

module.exports = router;
