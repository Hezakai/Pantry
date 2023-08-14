require('dotenv').config();
const path = require('path');
const express = require('express');
const hbars = require('express-handlebars');
const bp = require('body-parser');
const db = require('./config/dbConn');
const routes = require('./routes/inventory');

//test connection
db.authenticate()
    .then(() => console.log(`Connection to ${process.env.DB_NAME} successful.`))
    .catch(err => console.log('Error: ' + err))

const app = express();

app.get('/', (req, res) => res.send('INDEX TEST TEXT'));

app.use(routes);

const PORT = process.env.APP_PORT;

app.listen(PORT, console.log(`Server started on port: ${PORT}`));