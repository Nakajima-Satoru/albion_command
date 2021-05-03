const AppController = require("./AppController.js");

module.exports = class UiController extends AppController{

	form(){
		this.Ui.load("Form");
	}

};