const { Controller } = require("albion");

module.exports = class TableController extends Controller{

    handleBefore(){

        this.ro.autoRender(true);
        this.ro.template("default");

    }

    index(){

        var TestTable = this.Table.get("Test");
        
/*
        this.wait();

        var cont=this;
        TestTable.query("select id,title from document_jp limit 5",null,function(error,result){

            cont.ro.setData("data_t1",JSON.stringify(result,null,"　"));

            cont.next();
        });
*/

        var cont=this;

        this.wait();

        TestTable.select()
            .field(["id","title","url"])
            .count(function(error,result){

                if(error){
                    cont.ro.debug(error);
                }
                else{
                    cont.ro.debug(result);
                }

                cont.ro.exit();
            })
        ;


    }
};