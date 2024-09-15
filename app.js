const express  = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes.js')
const app = express();
const port = 3000 ;
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/test') 
const db = mongoose.connection;
db.on('error' , () => {
    console.log('connection error')
}) 

db.once('open' , () => {
    console.log('connectd to db')
})

app.use('/', taskRoutes);

app.listen(port ,() => {
    console.log('server started on port 3000')
})