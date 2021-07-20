/**
 * ==================================================
 * 
 * m02_incubator
 * 
 * make.js
 * 
 * CopyLight: Nakajima-Satoru since 0201/04/16
 * 
 * ==================================================
 */

const fs = require("fs");
const cli = require("./cli.js");
const text = require("./text.js");

module.exports = function(basePath,path,cmd){

    if(cmd.length==0){

        var values={};

        var classTypes={
            1:"Controller",
            2:"Model",
            3:"Table",
            4:"TableView",
            5:"Validator",
            6:"Pack",
            7:"Ui",
        };

        var cliList=[];

        cliList.push(function(obj){

            obj
                .out(" >\n")
                .out(" > Create a expand class file.\n")
                .out(" > Please enter an answer for each question.\n")
                .out(" > (The parentheses are the fault values ​​if you do not de-enter))\n")
                .out(" > \n")
                .next();
        });

        cliList.push(function(obj){
            obj
                .out(" > Specify the number of the class type to be created.\n")
                .out(" > The number that can be specified is one of the following.\n")
                .out(" >     Controller = 1,  Model = 2,  Table = 3,  TableView = 4,  Validator = 5,  Pack = 6,  Ui = 7\n")
                .out(" > (1): ");
        });

        cliList.push(function(obj){
            var juge=true;
            if(obj.value === ""){
                obj.value=1;
            }
            else if(obj.value <= 0 && obj.value >=8){
                obj
                    .out(" > [ERROR] : A number outside the range is specified.\n")
                    .out(" > \n");
                juge=false;
            }

            if(!juge){
                obj.retake();
                return;
            }

            values.type=obj.value;

            obj.next();
        });

        cliList.push(function(obj){
            obj.out(" > Please give the "+classTypes[values.tpye]+" name to create. : ");
        });

        cliList.push(function(obj){
            if(obj.value === ""){
                obj
                    .out(" > [ERROR] No name entered.")
                    .out(" > \n")
                    .retake();
                return;
            }

            values.name=obj.value;

            obj.next();
        });

        cliList.push(function(obj){
            var extendName=classTypes[values.type];

            obj.out(" > Specify the class name of the inheritance source.("+extendName+"): ");
        });

        cliList.push(function(obj){

            if(obj.value===""){
                obj.value=classTypes[values.type];
            }

            values.extend=obj.value;

            obj.next();
        });

        cliList.push(function(obj){

            var className=text.ucfirst(values.name)+classTypes[values.type];

            obj.out(" > Create a class file \""+className+"\" with the above contents. Is it OK? [Y/N] (Y): ");
        });

        cliList.push(function(obj){

            if(obj.value=="n" || obj.value=="N"){
                obj
                    .out(" > \n")
                    .out(" > \n")
                    .out(" > Canceled creation.")
                    .end();
                return;
            }

            obj.next();
        });

        cliList.push(function(obj){
            var className=text.ucfirst(values.name)+classTypes[values.type];

            var content="";
            fs.writeFileSync(basePath+"/"+path+"/app/"+classTypes[values.type]+"/"+className+".js",content);
            obj
                .out(" > \n")
                .out(" > \n")
                .out(" > Installation of class file \""+className+"\" is complete.")
                .end();
        });
        
        cli(cliList).start();

    }

};
