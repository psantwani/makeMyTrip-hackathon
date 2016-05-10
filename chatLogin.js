var mongoose = require('mongoose');
var ChatSchema = require('./schemas/flightBooking.js');
var Messages = mongoose.model('FlightBooking', ChatSchema);
var getUser = require('./readUser.js');

exports.check = function(req, res){  
	Messages.count({ email_id : req.email_id, PNR:req.PNR}, function (err, count) {
  	if (err){

  	}
  	else{
  		if(count >= 1){
        var messages = Messages.
        find().
        where('email_id').equals(req.email_id).
        where('PNR').equals(req.PNR).        
        limit(3).
        exec(function(err, message){
          getUser.read(message[0].flightNumber, res, true);                              
        });
  			
  		}
  		else{
  			res.send('Invalid login credentials');
  		}
  	}  		
	});
    
}    

