/**
 * ==================================================
 * 
 * FW_DAGGER_COMMAND Ver 1.0.0
 * 
 * index.js
 * 
 * CopyLight: Nakajima-Satoru since 0201/04/16
 * 
 * ==================================================
 */


const daggerCommand = function(basePath,path){

    this.run=function(){

        var cmd=process.argv;
        cmd.shift();
        cmd.shift();
    
        var mainCmd=cmd[0];
        cmd.shift();
    
        if(mainCmd=="init"){
            var init=require("./command/init.js");
            init(basePath,path,cmd);
            return;
        }
        else if(mainCmd=="-version" || mainCmd=="-v"){
            console.log("FW_DAGGER (Version:1.0.0)");
            console.log("Create: 2021/04/01  Copylight: Nakajima-Satoru");
            return;
        }
    
        if(!path){
            if(cmd[0]){
                path=cmd[0];
                cmd.shift();
            }
            else{
    
                console.log("===============================================");
                console.log("");
                console.log("   FW_DAGGER COMMANDER   ");
                console.log("   Version:1.0.0");
                console.log("");
                console.log("   Create   : 2021/04/01");
                console.log("   Copylight: Nakajima-Satoru");
                console.log("");
                console.log("===============================================");
        
                if(path){
                    console.log("");
                    console.log(": command list");
                    console.log("");
                    console.log("  run                  Publish the source in your project as a server.");
                    console.log("");
                    console.log("  make [classType]     Create a file for the class in your project.");
                    console.log("");
                }
                else{
        
                    console.log("");
                    console.log(": command list");
                    console.log("");
                    console.log("  create   [project-name] [template-name]      Create a project with the specified template.");
                    console.log("                                               If no template name is specified, the default template will be applied.");
                    console.log("");
                    console.log("  run      [project-name]                      Publish the source in your project as a server.");
                    console.log("");
                    console.log("  make     [project-name] [classType]          Create a file for the class in your project.");
                    console.log("");
                }
        
            }
        }
    
        if(mainCmd=="create"){
    
            var templateName=cmd[0];
            if(!templateName){
                templateName="default";
            }
        
            var create=require("./command/create.js");
            create(path,cmd,templateName);
        
        }
        else if(mainCmd=="run"){    
            var { http } = require("fw_dagger");

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
        else if(mainCmd=="make"){
            var make=require("./command/make.js");
            make(basePath,path,cmd);
        }
        else if(mainCmd=="command"){
            var { consoleCommand }=require("fw_dagger");
            var _c = new consoleCommand();
            _c.go(basePath,path,cmd);
        }
        else{
    
            console.log("===============================================");
            console.log("");
            console.log("   FW_DAGGER COMMANDER   ");
            console.log("   Version:1.0.0");
            console.log("");
            console.log("   Create   : 2021/04/01");
            console.log("   Copylight: Nakajima-Satoru");
            console.log("");
            console.log("===============================================");
    
            if(path){
                console.log("");
                console.log(": command list");
                console.log("");
                console.log("  run                  Publish the source in your project as a server.");
                console.log("");
                console.log("  make [classType]     Create a file for the class in your project.");
                console.log("");
            }
            else{
    
                console.log("");
                console.log(": command list");
                console.log("");
                console.log("  create   [project-name] [template-name]      Create a project with the specified template.");
                console.log("                                               If no template name is specified, the default template will be applied.");
                console.log("");
                console.log("  run      [project-name]                      Publish the source in your project as a server.");
                console.log("");
                console.log("  make     [project-name] [classType]          Create a file for the class in your project.");
                console.log("");
            }
    
        }

    };

    this.serviceStart=function(option){
        var { http } = require("fw_dagger");
        http.listen(basePath,path,option);
    };

};

module.exports = daggerCommand;