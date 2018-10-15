
var userService = require('../services/userService');


var userAction = function(req,res, callback){
    console.log('>>>FirstCtrl>>>>>');
    userService.userAction(req.body,res,callback);
};

module.exports = {
 
    userAction: userAction,
}