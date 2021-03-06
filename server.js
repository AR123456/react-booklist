const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const MONGODB_URI = require("./config/keys");

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);
// the walk through for deploying to heroku had this line so adding it 
//Set up promises with mongoose 
// mongoose.Promise = global.Promise;

// Connect to the Mongo DB
mongoose.connect(
  MONGODB_URI || "mongodb://localhost/reactreadinglist",
  // {
  //   useMongoClient:true
  //   } 
    
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
