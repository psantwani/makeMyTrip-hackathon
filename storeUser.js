var ChatSchema = require('./schemas/user.js');
var Chance = require('chance');
var chance = new Chance();

exports.store = function(){
    var messageDetails = {
        name: "Piyush"
        ,pseudo_name : chance.word()
        ,email_id : "psantwani@gmail.com"        
        ,timeStamp : new Date       
    };

    var messageData = new ChatSchema(messageDetails);
    messageData.save(function(err){
        if(err){
            console.log("Error occured in dumping data to User");
            console.log(err);
        }
        else{
            console.log('Data added to DB');
        }
    });    
}    

