const AppController = require("./AppController.js");

module.exports = class TableController extends AppController{

	handleBefore(){
		super.handleBefore();

		this.Table.load("Table01");
		this.Validator.load("Table01");

	}

	index(){

	}

	edit(id){

		this.ro.setData("validate",null);

		if(this.ro.post.get()){
			var post = this.ro.post.get();

			var vres = this.Validator.Table01.verify(post);

			if(vres.get()){
				this.ro.setData("validate",vres);
				return;
			}

			this.ro.exit("OK!");
		}


	}

}