var path = require("path");

module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
  	res.header("Content-Type", "text/html");
    res.sendFile(path.join(__dirname + "/../views/layouts/main.handlebars"));
  });

};