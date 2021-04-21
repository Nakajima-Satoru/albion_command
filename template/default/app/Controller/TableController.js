const { Controller } = require("albion");
const { sync } = require("albion");

module.exports = class TableController extends Controller{

    handleBefore(){
/*
        this.ro.autoRender(true);
        this.ro.template("default");
*/
    }

    index(){

        this.Table.load("Test");
        
        //this._pattern1();
        this._select();
        //this._select_join();


        //this._show();

        //this._save1();
        //this._save2();

        //this._delete1();
    }

    _pattern1(){

        this.wait();

        var cont=this;
        this.Table.Test.query("select id, name from table01 limit 5",null,function(error,result){

            cont.ro.debug(result);

            cont.next();
        });

    }

    _select(){

        var cont=this;

        this.wait();

        sync([
            function(next){

                cont.Table.Test.select()
                    .field(["id","name"])
                    .where("id","<=",1)
                    .all(function(error,result){
        
                        if(error){
                            cont.ro.debug(error);
                        }
                        else{
                            cont.ro.debug(result);
                        }
        
                        next();
                    })
                ;
    
            },
            function(){

                cont.Table.Test.select()
                    .field(["id","code","caption"])
                    .first(function(error,result){
        
                        if(error){
                            cont.ro.debug(error);
                        }
                        else{
                            cont.ro.debug(result);
                        }
        
                        cont.ro.debug(cont.Table.Test.getLog());

                        cont.next();
                    })
                ;

            }
        ]);


    }

    _select_join(){




    }


    _show(){

        var cont=this;

        this.wait();
        
        this.Table.Test.show().getProcessList(function(error,result){

            cont.ro.echo("getProcessList...");

            if(error){
                cont.ro.debug(error);
            }
            else{
                cont.ro.debug(result);
            }

            cont.next();
        });

    }

    _save1(){

        var save={
            delete_flg:0,
            title:"登録テスト用タイトル0001",
            status:0,
            sort_number:0,
        };

        var cont=this;

        this.wait();

        this.Table.Test.save()
            .auto(save,true,function(error,result){

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

    _save2(){

        var save={
            id:"112",
        //    created:"2021-01-01 00:00:00",
        //    updated:"2021-12-31 00:00:00",
            delete_flg:0,
            title:"登録テスト用タイトル0001_改",
            status:0,
            sort_number:0,
        };

        var cont=this;

        this.wait();

        this.Table.Test.save()
            .auto(save,{response:true},function(error,result){

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

    _delete1(){

        var cont=this;

        this.wait();

        this.Table.Test.delete([115,116],{physical:false,response:true},function(error,result){

            console.log(error);
            console.log(result);

        });
        
        cont.ro.exit();

    }

};