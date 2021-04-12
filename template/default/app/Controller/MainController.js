const { Controller } = require("alvion");

module.exports=class MainController extends Controller{

    handleBefore(){

    }

    index(){
        this.ro.response.end("OK");
    }
    aaa(){
        this.ro.response.end("aaa...");
    }

};