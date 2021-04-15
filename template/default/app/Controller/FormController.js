const { Controller } = require("albion");

module.exports=class FormController extends Controller{

    handleBefore(){

        this.ro.autoRender(true);
        this.ro.template("default");

    }

    index(){

        console.log(this.ro.method);
        console.log(this.ro.query.get());
        console.log(this.ro.post.get());


    }

};