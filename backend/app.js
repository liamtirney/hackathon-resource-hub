const express = require('express');
const mongoose = require('mongoose');
const Tutorial = require('./models/tutorial');

mongoose.connect('mongodb://127.0.0.1:27017/hackathon-resource-hub')

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
    console.log('Database connected');
})

const app = express();

app.get('/', (req, res) => {
    res.send('Hello!')
})

app.get('/maketutorial', async (req, res) => {
    const tutorial = new Tutorial({
        title: 'Rest APIs with Flask and Python in 2023',
        description: 'Build professional REST APIs with Python, Flask, Docker, Flask-Smorest, and Flask-SQLAlchemy',
        link: 'https://www.udemy.com/course/rest-api-flask-and-python/',
        githubLink: 'https://github.com/tecladocode/rest-apis-flask-python',
        sampleCodeLink: 'https://unsplash.com/photos/6GMq7AGxNbE'
    });
    await tutorial.save();
    res.send(tutorial);
})

app.listen(3000, () => {
    console.log('Serving on port 3000')
})