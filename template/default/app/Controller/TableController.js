const { Controller } = require("albion");

module.exports = class TableController extends Controller{

    handleBefore(){

        this.ro.autoRender(true);
        this.ro.template("default");

    }

    index(){

        this.Table.load("Test");
        
        //this._pattern1();
        //this._pattern2();

        this._show();

        this.ro.exit();
    }

    _pattern1(){

        this.wait();

        var cont=this;
        this.Table.Test.query("select id,title from document_jp limit 5",null,function(error,result){

            cont.ro.setData("data_t1",JSON.stringify(result,null,"　"));

            cont.next();
        });

    }

    _pattern2(){

        var cont=this;

        this.wait();

        this.Table.Test.select()
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

    _show(){

        
        console.log(this.Table.Test.show());

    }

    _save1(){

        var save={
            aaa:"bbbbbbbbb",
            ccc:"dddddddddddddd",
        };

        var cont=this;

        this.Table.Test.save()
            .insert(save,null,function(error,result){

                if(error){
                    cont.ro.debug(error);
                }
                else{
                    cont.ro.debug(result);
                }

            })
        ;

        cont.ro.exit();
    }
};