const AppController = require("./AppController.js");

module.exports = class ErrorController extends AppController{

    index(error){
        this.ro.setData("error",error);
    }

};