const { Controller } = require("albion");

module.exports = class AppController extends Controller{

    handleBefore(){

        this.ro
            .autoRender(true)
            .template("default");

    }

};