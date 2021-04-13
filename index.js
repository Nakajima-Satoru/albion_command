module.exports=function(basePath){

    var cmd=process.argv;
    cmd.shift();
    cmd.shift();
    
    if(cmd[0]=="create"){
    
        var path=cmd[1];
        
        var templateName=cmd[2];
        if(!templateName){
            templateName="default";
        }
    
        var create=require("./command/create.js");
        create(path,templateName);
    
    }
    else if(cmd[0]=="run"){
    
        var path=cmd[1];
    
        var { http } = require("albion");
        http.listen(basePath,path);
    
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
        
    }

};

