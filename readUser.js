var mongoose = require('mongoose');
var ChatSchema = require('./schemas/user.js');
var Messages = mongoose.model('User', ChatSchema);
exports.read = function(req, res, login){
    var appendMessage = {};    
    if(typeof login != "undefined"){
        appendMessage['flightNumber'] = req;
    }
    var messages = Messages.
    find().
    where('email_id').equals('psantwani@gmail.com').
    limit(1).
    sort('-timeStamp').    
    exec(function(err, message){        
        appendMessage['pseudo_name'] = message[0].pseudo_name;      
        res.send(appendMessage);     
        return appendMessage;
    });
}   

exports.readall = function(res){
    var messages = Messages.
    find().        
    sort('pseudo_name').    
    exec(function(err, message){
        res.send(message);       
        return message;
    });
}   

