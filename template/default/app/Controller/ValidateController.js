const { Controller } = require("albion");
const Validator = require("albion_validator");

module.exports = class ValidateController extends Controller{

    handleBefore(){

        this.ro.autoRender(true);
        this.ro.template("default");
    }

    index(){

        if(this.ro.post.get()){
            var post=this.ro.post.get();

            var testValidator = this.Validator.get("Test");

console.log(testValidator);

            var v=new Validator();

            v
                .addRule("value1","required","value1は必須です")
                .addRule("value2",["minLength",6],"6文字以上を入力してください")
                .addRule("value3",["maxLength",100],"100文字以内で入力してください");

            var vres=v.verify(post);

            if(vres.get()){
                this.ro.setData("validate",vres);
            }

        }

    }

};