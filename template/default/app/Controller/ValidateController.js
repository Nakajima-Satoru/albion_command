const { Controller } = require("albion");

module.exports = class ValidateController extends Controller{

    handleBefore(){

        this.ro.autoRender(true);
        this.ro.template("default");
    }

    index(){

        this.ro.setData("validate",{});

        if(this.ro.post.get()){
            var post=this.ro.post.get();

            var vres = this.Validator.get("Test")
                .verify(post);

            if(vres.get()){
                this.ro.setData("validate",vres);
            }

        }

    }

};