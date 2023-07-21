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
    for (let i in sampleTutorials) {
        const tutorial = new Tutorial({
            title: `${sampleTutorials[i].title}`,
            image: `${sampleTutorials[i].image}`,
            description: `${sampleTutorials[i].description}`,
            link: `${sampleTutorials[i].link}`,
            githubLink: `${sampleTutorials[i].githubLink}`,
            sampleCodeLink: `${sampleTutorials[i].sampleCodeLink}`
        })
        await tutorial.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close()
});