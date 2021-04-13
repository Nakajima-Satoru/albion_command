const { Controller } = require("albion");

module.exports=class MainController extends Controller{

    handleBefore(){

        this.ro.autoRender.set(true);
        this.ro.template.set("default");
    }

    index(){



    }

    aaa(){

        this.ro.echo("aaa....");

    }

};