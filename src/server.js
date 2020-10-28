const express = require('express');
const path = require('path');
const methodOverride = require('method-override');

// Initializations
const app = express();
require('./database');

// Settings
app.set('port', process.env.PORT || 8080);
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.urlencoded({extende: false}))
app.use(methodOverride('_method'));


// Global Variables

// Routes
app.use(require('./routes/index'));

//app.use(require('./routes/'))

// Media Files
app.use(express.static(path.join(__dirname, 'public')));

// Server initialization
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
