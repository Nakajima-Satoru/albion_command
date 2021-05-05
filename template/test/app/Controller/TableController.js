const AppController = require("./AppController.js");
const { dateFormat } = require("fw_dagger");

module.exports = class TableController extends AppController{

	handleBefore(){
		super.handleBefore();

		this.Ui.load("Form");
		this.Table.load("Table01");
		this.Validator.load("Table01");

		this.wait();

		var cont=this;

		this.Table.Table01.check(function(res){

			if(!res.status){
				cont.ro.view("notfound");
			}
			cont.next();

		});

	}

	index(){

		this.ro.setData("dateFormat",dateFormat);

		this.wait();

		var cont=this;

		this.Table.Table01
			.select()
			.paginate(20,1,function(res){

				cont.ro
					.setData("result",res.result)
					.setData("paginate",res.paginate);

				cont.next();
			});
	}

	edit(id){

		this.ro.setData("validate",null);

		if(this.ro.post.get()){
			var post = this.ro.post.get();

			var vres = this.Validator.Table01.verify(post);

			if(vres.get()){
				this.Ui.Form.setError(vres);
				return;
			}

			this.wait();
				
			var cont=this;

			this.Table.Table01.transaction(function(resolve){

				cont.Table.Table01.save({
					id:post.id,
					name:post.name,
					code:post.code,
					message:post.message,
				},{response:true},function(res){

					if(res.status){
						resolve(true);
						cont.ro.redirect("/table/edit/"+res.result.id);
					}
					else{
						resolve(false);
						cont.ro.redirect("/table");
					}

					cont.next();

				});
				
			});

		}
		else{
			
			if(!id){
				return;
			}


			this.wait();

			var cont=this;

			this.Table.Table01
				.select()
				.where("id","=",id)
				.first(function(res){

					if(res.status){
						cont.ro.post.set({
							id:res.result.id,
							name:res.result.name,
							code:res.result.code,
							message:res.result.message,
						});
					}
					else{
						cont.ro.redirect("/table");
					}
					
					cont.next();
				});

		}

	}

}