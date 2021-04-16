/**
 * ==================================================
 * 
 * ALBION_COMMAND Ver 1.0.0
 * 
 * create.js
 * 
 * CopyLight: Nakajima-Satoru since 0201/04/16
 * 
 * ==================================================
 */

var { fs } = require("albion");

module.exports=function(name,cmd,template){

    var tempPath=__dirname+"/../template/"+template;

    if(!fs.existsSync(tempPath)){
        console.log("# ERR: Not found template \""+tempPath+"\",");
        return;
    }

    console.log("# Copy the template \""+template+"\".")

    var lists=fs.deepSearch(tempPath);

    console.log("");
    console.log("# Make Directory");

    if(fs.existsSync(name)){
        console.log("# already directory "+name);
    }
    else{
        fs.mkdirSync(name);
        console.log("# Mkdir "+name);
    }

    for(var n=0;n<lists.dir.length;n++){
        var dir=lists.dir[n];
        dir=dir.replace(__dirname+"/../template/"+template,"");

        if(fs.existsSync(name+dir)){
            console.log("# already directory "+name+dir);
        }
        else{
            fs.mkdirSync(name+dir);
            console.log("# Mkdir "+name+dir);
        }
    }

    for(var n=0;n<lists.file.length;n++){
        var file=lists.file[n];
        var copyFile=file.replace(__dirname+"/../template/"+template,name);
        
        fs.copyFileSync(file,copyFile);
        console.log("# copy file "+copyFile);
    }

    console.log("");
    console.log("# create complete!");

};