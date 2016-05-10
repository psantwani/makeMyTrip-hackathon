var mongoose = require('mongoose');

module.exports = mongoose.model('FlightBooking', {
	 email_id : String
	,PNR : String
	,flightNumber : String	
	,fromPlace : String
	,toPlace : String
	,fromDate : Date
	,toDate : Date
		
});
	