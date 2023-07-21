const express = require('express');
const catchAsync = require('./utils/catchAsync')
const path = require("path");

const app = express();
const port = 5000;

// Json & Express Configs
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))

// Routes - Home
app.get('/', (req, res) => {
    res.render('home')
})

// Routes - Tutorials
app.get('/tutorials', catchAsync (async (req, res) => {
    const tutorials = await Tutorial.find({})
    res.json({ tutorials })
}))

// Routes - APIs
app.get('/apis', catchAsync (async (req, res) => {
    const apis = await API.find({})
    res.json({ apis })
}))

// Routes - Stories
app.get('/stories', catchAsync (async (req, res) => {
    const stories = await Story.find({})
    res.json({ stories })
}))

app.get('/stories/new', (req, res) => {
    res.render('stories/new')
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

// Server
app.listen(port, () => {
    console.log(`Listening on ${port}`)
})