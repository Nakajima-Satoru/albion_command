const { Shell } = require("albion");

module.exports = class ErrorShell extends Shell{

    index(error){

        console.log("------------------------------------------");
        console.log(error.stack);
        console.log("------------------------------------------");


    }
    
}