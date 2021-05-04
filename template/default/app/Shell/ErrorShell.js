const { Shell } = require("fw_dagger");

module.exports = class ErrorShell extends Shell{

    index(error){

        console.log("------------------------------------------");
        console.log(error.stack);
        console.log("------------------------------------------");


    }
    
}