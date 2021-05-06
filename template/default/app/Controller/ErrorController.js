const AppController = require("./AppController.js");

module.exports = class ErrorController extends AppController{

    index(error){
        
        if(this.ro.status() == 500){
            console.log(error.stack);
        }
        this.ro.setData("error",error.stack);
    }

};