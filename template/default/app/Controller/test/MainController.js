const { Controller } = require("fw_dagger");

module.exports = class MainController extends Controller{

    index(){
        this.ro.echo("OK Test Main Controller!");
    }

};