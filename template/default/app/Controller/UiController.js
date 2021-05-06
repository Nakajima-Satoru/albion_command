const AppController = require("./AppController.js");

module.exports = class UiController extends AppController{

	form(){
		this.Ui.load("Form");

/*
		if(this.ro.post.get()){
			var post = this.ro.post.get();

			this.ro.debug(post).exit();
		}
	*/
	}

};