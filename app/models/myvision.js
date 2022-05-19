const mongoose = require('../../database/index.js')
const bcrypt = require('bcryptjs')



const UserSchema = new mongoose.Schema({
	
	title:{
		type: String,   
		require: true,

	},
	description:{
		type: String,
		require: true,

	},
	user:{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		require: true,

	},
	tasks: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'myvision2',

	}],

	
	createdAt: {
		type: Date,
		default: Date.now,
	},

})


const blurry = mongoose.model('blurry', UserSchema)

module.exports = blurry

