const { Controller } = require("albion");

module.exports=class MainController extends Controller{

    handleBefore(){

        this.ro.autoRender(true);
        this.ro.template("default");

    }

    index(){


    }

    aaa(){

        /*  
        this.Model.load("Test");
        console.log(this.Model.Test.run());
        */

        /*
        var TestM = this.Model.get("Test");
        console.log(TestM.run());
        */
       
    }

};