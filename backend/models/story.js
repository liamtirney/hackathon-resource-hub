const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storySchema = new Schema({
  tagLine: String,
  image: String,
  name: String,
  body: String,
  link: String
})

module.exports = mongoose.model('Story', storySchema)