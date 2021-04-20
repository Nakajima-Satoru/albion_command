const { Controller } = require("albion");

module.exports=class ErrorController extends Controller{

    index(error){

        this.ro.echo("------------------------------------------------------------<br>")
            .echo("ERROR!<br>")
            .echo(error.stack);
        

    }

};