const { Controller } = require("fw_dagger");

module.exports=class ErrorController extends Controller{

    handleBefore(){
        this.ro.autoRender(true);
        this.ro.template("default");
    }

    index(error){
        if(this.ro.status()==404){
            this.ro.setData("error","PAGE NOT FOUND");

        }
        else{
            this.ro.setData("error",error.stack);
        }

    }

};