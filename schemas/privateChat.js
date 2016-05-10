var mongoose = require('mongoose');

module.exports = mongoose.model('PrivateChat', {
	flightNumber : String
	,fromUser : String
	,toUser: String
	,message: String
	,sentTime : Date	
});
	