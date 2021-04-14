const { Controller } = require("albion");

module.exports=class FormController extends Controller{

    handleBefore(){

        this.ro.autoRender.set(true);
        this.ro.template.set("default");

    }

    index(){

        console.log(this.ro.method);
        console.log(this.ro.query.get());
        console.log(this.ro.post.get());


    }

};