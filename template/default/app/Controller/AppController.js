const { Controller } = require("m02");

module.exports = class AppController extends Controller{

    handleBefore(){

        this.ro
            .autoRender(true)
            .template("default");

    }

};