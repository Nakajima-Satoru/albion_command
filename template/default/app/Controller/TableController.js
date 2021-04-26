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

        this.ro.autoRender(false);

        this.Table.load([
            "Test",
            "Test2",
        ]);
        
        if(this.ro.query.get("mode")){
            var mode =this.ro.query.get("mode");

            if(this[mode]){
                this[mode]();
            }
        }

    }

    _pattern1(){

        this.wait();

        var cont=this;

        var output={};

        sync([
            (next)=>{

                cont.Table.Test.query("select id, name from table01 limit 5",null,function(res){

                    if(!res.status){
                        return cont.ro.throw(res.error.message);
                    }

                    output.test1=res.result;

                    next();
                });
        
            },
            (next)=>{

                cont.Table.Test2.query("select id, code from table01 limit 5",null,function(res){

                    if(!res.status){
                        return cont.ro.throw(res.error.message);
                    }
        
                    output.test2=res.result;

                    cont.ro.debug(output).exit();
                });
        
            },
        ])

    }

    _pattern2(){

        this.wait();

        var cont=this;

        this.Table.Test
            .query("select id, name from table01 limit 5")
            .then(function(res){

                if(!res.status){
                    return cont.ro.throw(res.error.message);
                }

                cont.ro.debug(res).exit();
            });
    }

    _pattern3(){

        this.wait();

        var cont=this;

        this.Table.Test
            .query("select id, name from table01 limit 5")
            .success(function(res){
                cont.ro.echo("<p>Success</p>");
                cont.ro.debug(res).exit();
            })
            .error(function(error){
                cont.ro.echo("<p>ERROR</p>");
                cont.ro.debug(error).exit();
            });
    }

    _select1(){

        var cont=this;

        this.wait();

        cont.Table.Test
            .select()
            .all(function(res){

                if(!res.status){
                    cont.ro.echo("<p>ERROR</p>");
                    cont.ro.debug(error).exit();
                    return;    
                }

                cont.ro.echo("<p>Success</p>");
                cont.ro.debug(res).exit();
            });
    }

    _select2(){

        var cont=this;

        this.wait();

        cont.Table.Test
            .select()
            .first(function(res){

                if(!res.status){
                    cont.ro.echo("<p>ERROR</p>");
                    cont.ro.debug(error).exit();
                    return;    
                }

                cont.ro.echo("<p>Success</p>");
                cont.ro.debug(res).exit();
            });
    }

    _select3(){

        var cont=this;

        this.wait();

        cont.Table.Test
            .select()
            .value("id",function(res){

                if(!res.status){
                    cont.ro.echo("<p>ERROR</p>");
                    cont.ro.debug(error).exit();
                    return;    
                }

                cont.ro.echo("<p>Success</p>");
                cont.ro.debug(res).exit();
            });

    }

    _select4(){

        var cont=this;

        this.wait();

        cont.Table.Test
            .select()
            .max("id",function(res){

                if(!res.status){
                    cont.ro.echo("<p>ERROR</p>");
                    cont.ro.debug(error).exit();
                    return;    
                }

                cont.ro.echo("<p>Success</p>");
                cont.ro.debug(res).exit();
            });

    }

    _select5(){

        var cont=this;

        this.wait();

        cont.Table.Test
            .select()
            .count(function(res){

                if(!res.status){
                    cont.ro.echo("<p>ERROR</p>");
                    cont.ro.debug(error).exit();
                    return;    
                }

                cont.ro.echo("<p>Success</p>");
                cont.ro.debug(res).exit();
            });

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