const express = require('express');
const catchAsync = require('./utils/catchAsync');
const ExpressError = require('./utils/ExpressError');
const path = require("path");
const mongoose = require('mongoose');
let cors = require('cors');
const Tutorial = require('../models/tutorial');
const Api = require('../models/api');
const Story = require('../models/story');

mongoose.connect('mongodb://127.0.0.1:27017/hackathon-resource-hub')

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
    console.log('Database connected');
})

const app = express();
const port = 3010;

// Json & Express Configs
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())

// Routes - Home
app.get('/', (req, res) => {
    res.render('home')
})

app.get('/api', (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree"] })
})

// Routes - Tutorials
app.get('/tutorials', catchAsync (async (req, res) => {
    const tutorials = await Tutorial.find({});
    console.log(tutorials)
    res.json({ tutorials })
    // console.log("backend reached successfully");
    // res.json({message: "successful"});
}))

// Routes - APIs
app.get('/apis', catchAsync (async (req, res) => {
    const apis = await Api.find({})
<<<<<<< HEAD
    console.log(apis)
=======
>>>>>>> 78388f5ca283f9d4b6fa2cd93aa8e1cff539264c
    res.json({ apis })
}))

// Routes - Stories
app.get('/stories', catchAsync (async (req, res) => {
    const stories = await Story.find({})
    res.json({ stories })
}))

app.get('/stories/shareStory', (req, res) => {
    // res.render('stories/new')
    res.json({ shareStory })
})

app.post('/stories', catchAsync (async (req, res) => {
    const story = new Story(req.body.story)
    const savedStory = await story.save()
    res.redirect(`/stories/${story._id}`)
}))

app.get('/stories/:id', catchAsync (async (req, res) => {
    const { id } = req.params
    const story = await Story.findById(id)
    res.json({ story })
}))

app.get('/stories/:id/edit', catchAsync (async (req, res) => {
    const { id } = req.params
    const story = await Story.findById(id)
    res.json({ story })
}))

app.put('/stories/:id', catchAsync (async (req, res) => {
    const { id } = req.params
    const story = await Story.findByIdAndUpdate(id, { ...req.body.story })
    res.redirect(`/stories/${story._id}`)
}))

app.delete('/stories/:id', catchAsync (async (req,res) => {
    const { id } = req.params
    const story = await Story.findByIdAndDelete(id)
    res.redirect('/stories')
}))

app.all('*', (req, res, next) => {
    next(new ExpressError('Oops looks like you ended up in the wrong spot!', 404))
})

app.use( (err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = "Oops, Something went wrong"
    res.status(statusCode).render('error', { err })
})

// Server
app.listen(port, () => {
    console.log(`Serving on port ${port}`)
})