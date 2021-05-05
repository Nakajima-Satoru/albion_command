const AppController = require("./AppController.js");

module.exports = class PageController extends AppController{

	index(){}

	noRender(){
		this.ro
			.autoRender(false)
			.echo("No Render Page.....");
	}

	argtest(arg1,arg2){

		this.ro
			.setData("arg1",arg1)
			.setData("arg2",arg2)
		;
		
	}

	no_template(){
		this.ro
			.template(null)
		;
	}

	otherView(){
		this.ro.view("other_View");
	}

	time_lag(){
		this.wait();

		var cont=this;

		setTimeout(function(){

			cont.next();

		},3000);
	}

	redirect(){
		this.ro.redirect("/page/redirected");
	}

	redirected(){}

	errNotfound(){
		this.ro
			.status(404)
			.throw("PAGE NOT FOUND.")
		;
	}

	errInternalServerError(){
		this.ro.throw("ERROR TEST");
	}


};