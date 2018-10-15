
var domain = require('../model/index');

var userAction = function(bodyData,res,callback){
    console.log('>>>>in>>User>>Service>>Action>>>');

    var userObj = new domain.User({  name:'Rajat', username:'khurana'+ new Date().toString() });

    userObj.save(function(err,result){

        console.log('>>err>>result>>>',err,result);
        if(err) throw err;
        else{
            console.log('>>>>>>>>Success Achieved>>>>>',result);
            res.send('respond with a resource');
        }
    });

    // callback('respond with a resource'); // use for calling next function 

}


module.exports = {
    userAction: userAction,
}