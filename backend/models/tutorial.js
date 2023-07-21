const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tutorialSchema = new Schema({
    title: String,
    image: String,
    description: String,
    link: String,
    githubLink: String,
    sampleCodeLink: String
})

module.exports = mongoose.model('Tutorial', tutorialSchema)