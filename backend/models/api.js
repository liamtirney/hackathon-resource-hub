const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const apiSchema = new Schema({
    title: String,
    img: String,
    description: String,
    docsLink: String,
    youtubeLinks: [
        {
            title: String,
            link: String
        }
    ],
    articleLinks: [
        {
            title: String,
            link: String
        }
    ]
});

module.exports = model('Api', apiSchema);
