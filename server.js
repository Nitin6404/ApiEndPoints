require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');   
const db = process.env.DB_URL;
const routes = require('./routes/routes');

mongoose.connect(db)
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(`Error connecting to the database: ${error}`);
})

database.once('open', () => {
    console.log('Connected to the database');
})

const app = express();

app.use(express.json());
app.use('/api', routes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
    res.send('Hello World');
});



