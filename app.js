require('dotenv').config();
const path = require('path');
const express = require('express');
const hbars = require('express-handlebars');
const bp = require('body-parser');
const Sequelize = require('sequelize')

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 1000
    },
})

//test connection
db.authenticate()
    .then(() => console.log(`Connection to ${process.env.DB_NAME} successful.`))
    .catch(err => console.log('Error: ' + err))

const app = express();

app.get('/', (req, res) => res.send('INDEX TEST TEXT'))

const PORT = process.env.DB_PORT

app.listen(PORT, console.log(`Server started on port: ${PORT}`));