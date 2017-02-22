var db = require("../models");

module.exports = function(app) {

  app.get("/", function(req, res) {

      db.Burger.findAll().then(function(dbPost) {
          res.json(dbPost);
      });
  });

  // app.post("/", function(req, res) {
  //   db.Burger.create(req.body).then(function(dbPost) {
  //     res.json(dbPost);
  //   });
  // });

  // app.put("/:id", function(req, res) {
  //   db.Burger.update(
  //     req.body,
  //     {
  //       where: {
  //         id: req.body.id
  //       }
  //     }).then(function(dbPost) {
  //       res.json(dbPost);
  //     });
  // });

};
