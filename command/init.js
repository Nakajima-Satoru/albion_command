/**
 * ==================================================
 * 
 * ALBION_COMMAND Ver 1.0.0
 * 
 * init.js
 * 
 * CopyLight: Nakajima-Satoru since 0201/04/16
 * 
 * ==================================================
 */

const fs = require("fs");
const cli = require("./cli.js");
const text = require("./text.js");

module.exports = function(basePath,path,cmd){


    var clist=[];

    var data = {};

    clist.push(function(obj){

        obj
            .out("\n")
            .out("Create a new project for albion.\n")
            .out("\n")
            .out("Answer the following questions. \n")
            .out("(If you do not enter it, the value displayed in parentheses will be applied.)\n")
            .out("\n")
            .next();
    });
    clist.push(function(obj){

        obj
            .out("Q: Please enter the project name.: ");
    });

    clist.push(function(obj){
        if(obj.value===""){
            obj
                .out("ERROR:The project name has not been entered.\n")
                .retake();
            return;
        }

        data.name=obj.value;    
        obj.next();
    });

    clist.push(function(obj){
        obj
            .out("Q: Do you want to make debug mode friendly? [Y/N] (Y): ");
    });

    clist.push(function(obj){
        var value=true;
        if(obj.value==="n" || obj.value==="N"){
            value=false;
        }

        data.debugMode=value;

        obj.next();
    });

    clist.push(function(obj){
        obj
            .out("Q: Please specify the port number to publish.(80): ");
    });

    clist.push(function(obj){

        var value=80;
        if(obj.value){
            value=obj.value;
        }

        data.port=value;

        obj.next();
    });

    clist.push(function(obj){

        obj
            .out("Q: Do you want to apply SSL? [Y/N] (N): ");
    });

    clist.push(function(obj){

        var value=false;
        if(obj.value==="y" || obj.value==="Y"){
            value=true;
        }

        data.sslVerify=value;

        obj.next();
    });

    clist.push(function(obj){
        obj
            .out("Q: Please specify the host name. (): ");
    });

    clist.push(function(obj){

        data.host=obj.value;

        obj.next();
    });

    clist.push(function(obj){
        obj
            .out("Q: Do you want to apply \"Content-Type: text/html; charset = utf-8\" to the response header when making a normal request? [Y/N] (y): ");
    });

    clist.push(function(obj){

        var value=false;
        if(obj.value==="y" || obj.value==="Y"){
            value=true;
        }

        data.responseHeader=value;

        obj.next();
    });

    clist.push(function(obj){
        obj
            .out("Q: Specify the directory name for static content.(webroot): ");
    });

    clist.push(function(obj){

        var value="webroot";
        if(obj.value){
            value=obj.value;
        }

        data.assets=value;

        obj.next();
    });

    clist.push(function(obj){
        obj
            .out("Q: Do you want to apply a file cache to static content? [Y/N] (Y): ");
    });

    clist.push(function(obj){

        var value=true;
        if(obj.value==="n" || obj.value==="N"){
            value=false;
        }

        data.assetsCache=value;

        obj.next();
    });

    clist.push(function(obj){
        obj
            .out("Q: Do you want to use a database? [Y/N] (Y): ");
    });

    clist.push(function(obj){

        var value=true;
        if(obj.value==="n" || obj.value==="N"){
            value=false;
        }

        data.useDatabase=value;

        obj.next();
    });

    clist.push(function(obj){
        obj
            .out("Q: Do you want to use the element class \"Model\"? [Y/N] (Y): ");
    });

    clist.push(function(obj){

        var value=true;
        if(obj.value==="n" || obj.value==="N"){
            value=false;
        }

        data.useModel=value;

        obj.next();
    });

    clist.push(function(obj){
        obj
            .out("Q: Do you want to use the element class \"Table\"? [Y/N] (Y): ");
    });

    clist.push(function(obj){

        var value=true;
        if(obj.value==="n" || obj.value==="N"){
            value=false;
        }

        data.useTable=value;

        obj.next();
    });

    clist.push(function(obj){
        obj
            .out("Q: Do you want to use the element class \"TableView\"? [Y/N] (Y): ");
    });

    clist.push(function(obj){

        var value=true;
        if(obj.value==="n" || obj.value==="N"){
            value=false;
        }

        data.useTableView=value;

        obj.next();
    });

    clist.push(function(obj){
        obj
            .out("Q: Do you want to use the element class \"Pack\"? [Y/N] (Y): ");
    });

    clist.push(function(obj){

        var value=true;
        if(obj.value==="n" || obj.value==="N"){
            value=false;
        }

        data.usePack=value;

        obj.next();
    });

    clist.push(function(obj){
        obj
            .out("Q: Do you want to use the element class \"Ui\"? [Y/N] (Y): ");
    });

    clist.push(function(obj){

        var value=true;
        if(obj.value==="n" || obj.value==="N"){
            value=false;
        }

        data.useUi=value;

        obj.next();
    });

    clist.push(function(obj){
        obj
            .out("Q: Do you want to use the element class \"Shell\"? [Y/N] (Y): ");
    });

    clist.push(function(obj){

        var value=true;
        if(obj.value==="n" || obj.value==="N"){
            value=false;
        }

        data.useShell=value;

        obj.next();
    });

    clist.push(function(obj){
        obj
            .out("----------------------------------------------------------------\n")
            .out("  Project Name               : "+data.name+"\n")
            .out("  Debug Mode                 : "+data.debugMode+"\n")
            .out("  SSL Verify                 : "+data.sslVerify+"\n")
            .out("  port Number                : "+data.port+"\n")
            .out("  host                       : "+data.host+"\n")
            .out("  Response Header(text/html) : "+data.responseHeader+"\n")
            .out("  Assets Directory Name      : "+data.assets+"\n")
            .out("  Assets File Cache          : "+data.assetsCache+"\n")
            .out("  Use Model                  : "+data.useModel+"\n")
            .out("  Use Table                  : "+data.useTable+"\n")
            .out("  Use TableView              : "+data.useTableView+"\n")
            .out("  Use Pack                   : "+data.usePack+"\n")
            .out("  Use Ui                     : "+data.useUi+"\n")
            .out("  Use Shell                  : "+data.useShell+"\n")
            .out("----------------------------------------------------------------\n")
            .out("Q. Create a project with the above contents. Is it OK? [Y/N] (Y): ")
    });

    clist.push(function(obj){

        var value=true;
        if(obj.value=="n" || obj.value=="N"){
            value=false;
        }

        if(value){
            initCreate(basePath,data);

            obj
                .out("\n")
                .out("\n")
                .out("completed.");
        }
        else{
            obj
                .out("\n")
                .out("\n")
                .out("Canceled.");
        }
        
        obj.end(); 
    });

    cli(clist).start({
        indent:"  ",
    });    

};

const initCreate=function(basePath,data){

    console.log(data);

    var projectPath=basePath+"/"+data.name;

    // mkdir project
    if(!fs.existssSync(projectPath)){
        fs.mkdirSync(projectPath);
    }

    // mkdir app
    if(!fs.existssSync(projectPath+"/app")){
        fs.mkdirSync(projectPath+"/app");
    }

    // mkdir config
    if(!fs.existssSync(projectPath+"/config")){
        fs.mkdirSync(projectPath+"/config");
    }

    // mkdir render
    if(!fs.existssSync(projectPath+"/render")){
        fs.mkdirSync(projectPath+"/render");
    }

    // mkdir assets directory
    if(!fs.existssSync(projectPath+"/"+data.assets)){
        fs.mkdirSync(projectPath+"/"+data.assets);
    }

    

};