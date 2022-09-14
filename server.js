// the server port we will be using process.enc.PORT allows us to use heroku
const PORT = process.env.PORT || 3001;
// constant to call express
const express = require('express');
// app will be the term use to signal our listen and API
const app = express();
const fs = require('fs');
const path = require('path');

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// adding middleware for POST request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// this will serve the js and css from displaying to html page once loaded
app.use(express.static('public'));

// use apiRoutes


// method to make our server listen
app.listen(PORT, () => {
    console.log(`The API server is now on port ${PORT}!`);
});
