const { Controller } = require("fw_dagger");

module.exports=class AppController extends Controller{

    test(){
        return "test controller no test";
    }

};