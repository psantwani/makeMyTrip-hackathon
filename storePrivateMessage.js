var ChatSchema = require('./schemas/privateChat.js');

exports.store = function(req,res){
    var messageDetails = {
        flightNumber: req.flightNumber
        ,fromUser : req.fromUser
        ,toUser : req.toUser
        ,message: req.message
        ,sentTime : new Date       
    };

    var messageData = new ChatSchema(messageDetails);
    messageData.save(function(err){
        if(err){
            console.log("Error occured in dumping data to Chat");
            console.log(err);
        }
        else{
            console.log('Data added to DB');
        }
    });    
}    
