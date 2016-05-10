var ChatSchema = require('./schemas/flightBooking.js');

exports.store = function(){
    var messageDetails = {
        email_id : "psantwani@gmail.com"
        ,PNR : "abc"
        ,flightNumber : "Boeing-777"  
        ,fromPlace : "BLR"
        ,toPlace : "MUM"
        ,fromDate : new Date
        ,toDate : new Date    
    };

    var messageData = new ChatSchema(messageDetails);
    messageData.save(function(err){
        if(err){
            console.log("Error occured in dumping data to Flight Booking");
            console.log(err);
        }
        else{
            console.log('Data added to DB');
        }
    });    
}    

