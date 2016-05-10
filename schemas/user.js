var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
	 name : String
	,pseudo_name : String
	,email_id : String	
	,timeStamp : Date
});
	