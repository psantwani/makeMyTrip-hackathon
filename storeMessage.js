var ChatSchema = require('./schemas/chat.js');

exports.store = function(req,res){
    var messageDetails = {
        flightNumber: req.flightNumber
        ,pseudo_name : req.pseudo_name
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
            res.send('Data added to DB');
            return "Data added to DB";
        }
    });    
}    

