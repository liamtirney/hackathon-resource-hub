const mongoose = require('mongoose');
const Tutorial = require('../models/tutorial');
const sampleTutorials = require('./sampleTutorials')

mongoose.connect('mongodb://127.0.0.1:27017/hackathon-resource-hub')

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
    console.log('Database connected');
});

const seedDB = async () => {
    await Tutorial.deleteMany({});
    for (let sampleTutorial of sampleTutorials) {
        const tutorial = new Tutorial({
            title: sampleTutorial.title,
            image: sampleTutorial.image,
            description: sampleTutorial.description,
            link: sampleTutorial.link,
            githubLink: sampleTutorial.githubLink,
            sampleCodeLink: sampleTutorial.sampleCodeLink
        })
        await tutorial.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close()
});