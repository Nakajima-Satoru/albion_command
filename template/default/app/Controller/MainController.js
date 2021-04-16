const { Controller } = require("albion");

module.exports=class MainController extends Controller{

    handleBefore(){

        this.ro.autoRender(true);
        this.ro.template("default");

    }

    index(){


    }

    aaa(){

        /*  
        this.Model.load("Test");
        console.log(this.Model.Test.run());
        */

        /*
        var TestM = this.Model.get("Test");
        console.log(TestM.run());
        */
       
        /*
        var TestTable=this.Table.get("Test");

        var cont = this;

        cont.wait();

        TestTable.query("select id, title from document_jp;",null,function(error,result){

            cont.ro.debug(result);
            
            cont.next();
        });
        */
       
    }

};