const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;

mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.error(err));

app.use("/api/items", items);

const port = process.env.port || 8080;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})