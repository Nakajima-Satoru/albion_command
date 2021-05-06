const { Controller } = require("fw_dagger");

module.exports = class AppController extends Controller{

    handleBefore(){

        this.ro
            .autoRender(true)
            .template("default");

    }

};