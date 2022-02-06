const express = require('express');
const bodyparser = require('body-parser');


const app = express();
var port = process.env.PORT || 4002;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false}));

app.listen(port)


