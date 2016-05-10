var ChatSchema = require('./schemas/chat.js');

exports.store = function(res){
    var messageDetails = {
        flightNumber: "Boeing-777"
        ,pseudo_name : "aashique"
        ,message: "Hey, anyone going to Kormangla ?"    
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

