const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/mydb'
	)
mongoose.Promise = global.Promise
module.exports = mongoose
