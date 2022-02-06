const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mydb', {useMongoClient: true});

mongoose.Promise = global.Promise;

module.exports = mongoose;
