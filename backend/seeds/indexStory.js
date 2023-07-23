const mongoose = require('mongoose');
const Story = require('../models/story');
const sampleStories = require('./sampleStories');

mongoose.connect('mongodb://127.0.0.1:27017/hackathon-resource-hub')

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Database connected');
});

const seedDB = async () => {
  await Story.deleteMany({});
  for (let i in sampleStories) {
    const story = new Story({
      tagLine: `${sampleStories[i].tagLine}`,
      image: `${sampleStories[i].image}`,
      name: `${sampleStories[i].name}`,
      body: `${sampleStories[i].body}`,
      link: `${sampleStories[i].link}`,
    })
    await story.save();
    console.log(story);
  }
}

seedDB().then(() => {
  mongoose.connection.close()
})