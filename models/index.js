const mongoose = require('../database')
const bcrypt = require('bcryptjs')



const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		require: true,

	},
	email:{
		type: String,
		unique: true,
		require: true,
		lowercase: true,

	},
	pass:{
		type: String,
		required: true,
		select: false,

	},
	createdAt: {
		type: Date,
		default: Date.now,
	},

})

UserSchema.pre('save', async function(next){
	const hash = await bcrypt.hash(this.pass, 10)
	this.pass = hash
	next()
})

const User = mongoose.model('User', UserSchema)

module.exports = User

