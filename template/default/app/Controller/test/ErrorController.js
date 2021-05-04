const { Controller } = require("fw_dagger");

module.exports=class ErrorController extends Controller{

    index(error){

        this.ro.echo("------------------------------------------------------------<br>")
            .echo("ERROR!<br>")
            .echo(error.stack);
        

    }

};