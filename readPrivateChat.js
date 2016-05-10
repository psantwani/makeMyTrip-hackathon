var mongoose = require('mongoose');
var ChatSchema = require('./schemas/privateChat.js');
var Messages = mongoose.model('PrivateChat', ChatSchema);
exports.read = function(req,res){
    var messages = Messages.
    find().
    where('flightNumber').equals(req.flightNumber).
    where('fromUser').equals(req.fromUser).
    where('toUser').equals(req.toUser).    
    limit(10).
    sort('-sentTime').    
    exec(function(err, message){
        res.send(message);
    });    
}    

