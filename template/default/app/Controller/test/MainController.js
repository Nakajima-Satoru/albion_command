const { Controller } = require("albion");

module.exports = class MainController extends Controller{

    index(){
        this.ro.echo("OK Test Main Controller!");
    }

};