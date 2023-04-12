const express = require('express')
const constellations = require('./models/constellations')
const app = express()
const PORT = 8000

app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())

// ===== Middleware
// Setting a middleware to run in our app
app.use((req, res, next) => {
    console.log(req.url)
    next()
})
// parses the data from the request
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res)=>{
    console.log(req.body);
    res.send('<h1>This is the Constellations Root</h1>')
})
app.get('/constellations', (req, res) =>{
    // res.send(constellations)
    res.render('Index', {constellations: constellations})
})
app.get('/constellations/orion', (req, res) => {
    res.render('Orion', {orion: constellations[0]})
})
app.get('/constellations/sagittarius', (req, res) => {
    res.render('Sagittarius', {sagittarius: constellations[1]})
})
app.get('/constellations/leo', (req, res) => {
    res.render('Leo', {leo: constellations[2]})
})
app.get('/constellations/cassiopeia', (req, res) => {
    res.render('Cassiopeia', {cassiopeia: constellations[3]})
})
app.get('/constellations/aries', (req, res) => {
    res.render('Aries', {aries: constellations[4]})
})
app.get('/constellations/scorpius', (req, res) => {
    res.render('Scorpius', {scorpius: constellations[5]})
})
app.get('/constellations/draco', (req, res) => {
    res.render('Draco', {draco: constellations[6]})
})
app.get('/constellations/aquarius', (req, res) => {
    res.render('Aquarius', {aquarius: constellations[7]})
})
app.get('/constellations/libra', (req, res) => {
    res.render('Libra', {libra: constellations[8]})
})
app.get('/constellations/pisces', (req, res) => {
    res.render('Pisces', {pisces: constellations[9]})
})
// app.post('/constellations', (req, res)=>{
//     console.log(req.body);
//     constellations.push(req.body)
//     res.redirect('/constellations')
// })
// app.get('/constellations/new', (req, res)=>{
//     res.render('New')
// })
app.get('/constellations/:indexOfConstellationsArray', (req, res) =>{
    console.log(req.params)
    // res.send(constellations[req.params.indexOfConstellationsArray])
    res.render('Show', {constellation: constellations[req.params.indexOfConstellationsArray]})
})

// If non of the routes matches the request show 404 pg
app.get('*', (req, res) => {
    //res.redirect('/constellations')
    res.render('404')
})
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})