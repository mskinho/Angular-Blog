const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const path = require('path')

const dbconfig = require('./config/database')
const postRoute = require('./routes/post')
const getRoute = require('./routes/get')

const app = express()

mongoose.connect(dbconfig.database, () => {
    console.log('MongoDB started at 27017...')
})

// ng build -prod --aot=false

app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, authorization');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE');
    next();
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'dist')))

app.use('/post', postRoute)
app.use('/get', getRoute)

app.get('**', (req, res) => {
    res.render('index');
});
// '165.227.130.203'
app.listen(8080, () => {
    console.log('Server started at http://localhost:8080...')
})