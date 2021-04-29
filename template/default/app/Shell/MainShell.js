const { Shell } = require("albion");
const { sync } = require("albion");

module.exports = class MainShell extends Shell{

    index(){

        var cont = this;

        var request={};

        sync([
            (next)=>{

                cont.ro
                    .echo("コマンドを実行します\n\n","cyan")
                    .echo("Q.お名前を入力してください: ")
                    .input(function(value,retake){

                        if(!value){
                            cont.ro.echo("  ERROR:","red").echo("お名前が入力されていません。もう一度入力してください: ")
                            return retake();
                        }

                        request.name=value;
                        next();
                    })
                ;

            },
            (next)=>{

                cont.ro
                    .echo("Q.お名前(フリガナ)を入力してください:")
                    .input(function(value,retake){

                        if(!value){
                            cont.ro.echo("  ERROR:","red").echo("お名前(フリガナ)が入力されていません。もう一度入力してください: ")
                            return retake();
                        }

                        request.kana=value;
                        next();
                    });

            },
            (next)=>{

                cont.ro
                    .echo("Q.このまま登録しますか?[y/n] (y): ")
                    .input(function(value){

                        if(!(value=="N" || value=="n")){
                            value="Y";
                        }

                        request.enable=value;
                        next();
                    });
            },
            (next)=>{
                console.log(request);
                cont.ro.echo("終わります").exit();
            },
        ])


    }
}

