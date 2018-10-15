
var getEnvironmentData = function(){

    console.log('>>.In>>ENV>>DATA',process.env.NODE_ENV);

    switch(process.env.NODE_ENV){

        case 'development': 
                    return{
                        dev: true,
                        prod: false,
                    }
                    break;
         
        case 'production':
                        return{
                            dev: false,
                            prod: true,
                        }
                    break;
        default:    
                console.log('>>>>>>In>>Deafult>>Case>>>>');                            
    }
    // return true;
};

module.exports = {

   getEnvData: getEnvironmentData,
}