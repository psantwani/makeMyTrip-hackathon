var mongoose = require('mongoose');

module.exports = mongoose.model('Chat', {
	flightNumber: String
	,pseudo_name : String
	,message: String	
	,sentTime : Date
	,timeStamp : Date
});
	