/**
 * ==================================================
 * 
 * m02_incubator
 * 
 * index.js
 * 
 * CopyLight: Nakajima-Satoru since 0201/04/16
 * 
 * ==================================================
 */


const incubator = function(basePath,path){

    /**
     * run
     */
    this.run=function(){

        var cmd=process.argv;
        cmd.shift();
        cmd.shift();

        var mainCmd=cmd[0];
        cmd.shift();

        path=cmd[0];
        cmd.shift();

        if(mainCmd=="-version" || mainCmd=="-v"){
            console.log("m02_incubator (Version:1.0.0)");
            console.log("Create: 2021/07/19  Copylight: Nakajima-Satoru");
            return;
        }
        else if(mainCmd=="init"){
            var init=require("./command/init.js");
            init(basePath,null,cmd);
            return;
        }
        else if(mainCmd=="create"){
    
            var templateName=cmd[0];
            if(!templateName){
                templateName="default";
            }
        
            var create=require("./command/create.js");
            create(path,cmd,templateName);
        
        }
        else if(mainCmd=="run"){    
            var { http } = require("m02");

            var option=null;
            if(cmd.length){
                option={};
                for(var n=0;n<cmd.length;n++){
                    var buff=cmd[n].split("=");
                    option[buff[0]]=buff[1];
                }
            }

            http.listen(basePath,path,option);
        }
        else if(mainCmd=="command"){
            var { consoleCommand }=require("m02");
            var _c = new consoleCommand();
            _c.go(basePath,path,cmd);
        }
        else if(mainCmd=="make"){
            var make=require("./command/make.js");
            make(basePath,path,cmd);
        }
        else{

            console.log("===============================================");
            console.log("");
            console.log("   m02_incubator   ");
            console.log("   Version:1.0.0");
            console.log("");
            console.log("   Create   : 2021/07/19");
            console.log("   Copylight: Nakajima-Satoru");
            console.log("");
            console.log("===============================================");
    
            console.log("");
            console.log(": command list");
            console.log("");
            console.log("  init     [project-name]                      Start the project from the initial settings and create it.");
            console.log("");
            console.log("  create   [project-name] [template-name]      Create a project with the specified template.");
            console.log("                                               If no template name is specified, the default template will be applied.");
            console.log("");
            console.log("  run      [project-name]                      Publish the source in your project as a server.");
            console.log("");
            console.log("  make     [project-name] [classType]          Create a file for the class in your project.");
            console.log("");
            console.log("  command  [cpmmand_path]                      Run the console application..");
            console.log("");
        }
    };

    /**
     * projectRun
     */
    this.projectRun=function(){

        var cmd=process.argv;
        cmd.shift();
        cmd.shift();

        var { http } = require("m02");

        var option=null;
        if(cmd.length){
            option={};
            for(var n=0;n<cmd.length;n++){
                var buff=cmd[n].split("=");
                option[buff[0]]=buff[1];
            }
        }

        http.listen(basePath,path,option);
    };

};
module.exports = incubator;