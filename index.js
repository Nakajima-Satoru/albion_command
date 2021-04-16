/**
 * ==================================================
 * 
 * ALBION_COMMAND Ver 1.0.0
 * 
 * index.js
 * 
 * CopyLight: Nakajima-Satoru since 0201/04/16
 * 
 * ==================================================
 */

module.exports=function(basePath,path){

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
        console.log("ALBION (Version:1.0.0)");
        console.log("Create: 2021/04/01  Copylight: Nakajima-Satoru");
        return;
    }

    if(!path){
        if(cmd[0]){
            path=cmd[0];
            cmd.shift();
        }
        else{
            console.log("ERR: No project name specified");
            return;
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
        var { http } = require("albion");
        http.listen(basePath,path,cmd);
    }
    else if(mainCmd=="make"){
        var make=require("./command/make.js");
        make(basePath,path,cmd);
    }
    else{

        console.log("===============================================");
        console.log("");
        console.log("   ALBION COMMANDER   ");
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

