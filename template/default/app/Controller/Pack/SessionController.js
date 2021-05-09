const AppController = require("../AppController.js");

module.exports = class SessionController extends AppController{

    handleBefore(){
        super.handleBefore();

        this.Ui.load("Form");
    
        this.Pack.load("Session");
    }

    index(){


    }

};