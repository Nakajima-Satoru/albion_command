const AppController = require("./AppController.js");

module.exports = class ValidateController extends AppController{

	handleBefore(){
		super.handleBefore();

		this.Ui.load("Form");

		this.Validator.load("Test1");

	}

	index1(){

		if(this.ro.post.get()){
			var post = this.ro.post.get();

			var vres = this.Validator.Test1.verify(post);

			if(vres.get()){
				this.Ui.Form.setError(vres);
				return;
			}

			this.ro.debug(post).exit();
		}

	}

	index2(){

		if(this.ro.post.get()){
			var post = this.ro.post.get();

			var vres = this.Validator.Test1.verify(post,{
				ruleName:"rules_v2",
			});

			if(vres.get()){
				this.Ui.Form.setError(vres);
				return;
			}

			this.ro.debug(post).exit();
		}

	}

	index3(){

		if(this.ro.post.get()){
			var post = this.ro.post.get();

			var vres = this.Validator.Test1.verify(post,{
				ruleName:"rules_v3",
			});

			if(vres.get()){
				this.Ui.Form.setError(vres);
				return;
			}

			this.ro.debug(post).exit();
		}

	}

	index4(){

		if(this.ro.post.get()){
			var post = this.ro.post.get();

			var vres = this.Validator.Test1.verify(post,{
				ruleName:"rules_v4",
			});

			if(vres.get()){
				this.Ui.Form.setError(vres);
				return;
			}

			this.ro.debug(post).exit();
		}

	}

	index5(){

		if(this.ro.post.get()){
			var post = this.ro.post.get();

			var vres = this.Validator.Test1.verify(post,{
				ruleName:"rules_v5",
			});

			if(vres.get()){
				this.Ui.Form.setError(vres);
				return;
			}

			this.ro.debug(post).exit();
		}

	}
};