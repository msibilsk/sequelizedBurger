var express = require("express");
var mthdOvrd = require("method-override");
var bodyParser = require("body-parser");

var port = process.env.PORT || 3000;

var app = express();

var db = require("./models");
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(mthdOvrd("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.

require("./routes/html-routes.js")(app);
require("./controllers/burgers_controller.js")(app);


db.sequelize.sync().then(function() {
	app.listen(port);
});