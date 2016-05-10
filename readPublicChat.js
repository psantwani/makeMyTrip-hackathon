var mongoose = require('mongoose');
var ChatSchema = require('./schemas/chat.js');
var Messages = mongoose.model('Chat', ChatSchema);
exports.read = function(req, res){
    var messages = Messages.
    find().
    where('flightNumber').equals(req.flightNumber).
    limit(10).
    sort('-sentTime').    
    exec(function(err, message){
        res.send(message);       
        return message;
    });
    
}    

