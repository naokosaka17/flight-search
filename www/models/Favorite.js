// Require mongoose
var mongoose = require("mongoose");

// Create a Schema class with mongoose
var Schema = mongoose.Schema;

// Create a FavoriteSchema with the Schema class
var FavoriteSchema = new Schema({
  // title: a string
  title: {
    type: String
  },
  // body: a string
  body: {
    type: String
  }
});

// Make a Favorite model with the FavoriteSchema
var Favorite = mongoose.model("Favorite", FavoriteSchema);

// Export the Favorite model
module.exports = Favorite;
