const mongoose = require('mongoose');
const Api = require('../models/api');
const sampleApis = require('./sampleApis');

mongoose.connect('mongodb://127.0.0.1:27017/hackathon-resource-hub')

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
    console.log('Database connected');
});

const seedDB = async () => {
        await Api.deleteMany({});
        for (let sampleApi of sampleApis) {
            const api = new Api({
              title: sampleApi.title,
              image: sampleApi.image,
              description: sampleApi.description,
              docsLink: sampleApi.docsLink,
              youtubeLinks: sampleApi.youtubeLinks,
              articleLinks: sampleApi.articleLinks,
            });
            await api.save();
          }
          console.log('Data seeding completed.');
}

seedDB().then(() => {
    mongoose.connection.close()
});