
var logger = function(req,res,next){

    console.log('>>>>>In>>>Middleware>>>>');
    next();
}

module.exports = {
    logger:logger,
}