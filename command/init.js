/**
 * ==================================================
 * 
 * m02_incubator
 * 
 * init.js
 * 
 * CopyLight: Nakajima-Satoru since 0201/04/16
 * 
 * ==================================================
 */

const fs = require("fs");
const CLI = require("./cli.js");
const sync = require("./sync.js");
const text = require("./text.js");

module.exports = (basePath,path,cmd)=>{

    var data={};

    var c_=new CLI();

    sync([
        (next)=>{

            c_
                .echo("\n")
                .echo("  =================================================================================\n")
                .echo("\n")
                .echo("  Create a new project for \"m02\".\n")
                .echo("\n")
                .echo("  Answer the following questions. \n")
                .echo("  (If you do not enter it, the value displayed in parentheses will be applied.)\n")
                .echo("\n")
                .echo("  =================================================================================\n")
                .echo("\n\n")
            ;

            next();

        },
        (next)=>{

            c_
                .echo("  Q:","cyan").echo(" Please enter the project name.: ")
                .input((value,retake)=>{

                    if(!value){
                        c_
                            .echo("  [ERROR]: The project name has not been entered. ","yellow").echo("retry : ");
                        ;
                        return retake();
                    }

                    data.name=value;
                    next();
                });
        },
        (next)=>{

            c_ 
                .echo("  Q:","cyan").echo(" Do you want to make debug mode friendly? [Y/N] (Y): ")
                .input((value)=>{

                    if(value==="n" || value==="N"){
                        value=false;
                    }
                    else{
                        value=true;
                    }
    
                    data.debugMode=value;
                    next();
                });

        },
        (next)=>{

            c_
                .echo("  Q: ","cyan").echo("Please specify the port number to publish.(80): ")
                .input((value,retake)=>{

                    if(!parseInt(value)){
                        value=80;
                    }

                    data.port=value;
            
                    next();
                });
        },
        (next)=>{

            c_
                .echo("  Q: ","cyan").echo("Do you want to apply SSL? [Y/N] (N): ")
                .input((value)=>{
                
                    if(value==="y" || value==="Y"){
                        value=true;
                    }
                    else{
                        value=false;
                    }
            
                    data.sslVerify=value;
            
                    next();
                });

        },
        (next)=>{
            c_
                .echo("  Q: ","cyan").echo("Please specify the host name. (): ")
                .input((value)=>{
                    data.host=value;
                    next();
                });
        },
        (next)=>{

            c_
                .echo("  Q: ","cyan").echo("Do you want to apply \"Content-Type: text/html; charset = utf-8\" to the response header when making a normal request? [Y/N] (y): ")
                .input((value)=>{

                    if(value==="y" || value==="Y"){
                        value=true;
                    }
                    else{
                        value=false;
                    }
            
                    data.responseHeader=value;
            
                    next();
                });
        },
        (next)=>{

            c_
                .echo("  Q: ","cyan").echo("Specify the directory name for static content.(webroot): ")
                .input((value)=>{

                    if(!value){
                        value="webroot"
                    }
            
                    data.assets=value;
            
                    next();
                });
        },
        (next)=>{

            c_
                .echo("  Q: ","cyan").echo("Do you want to apply a file cache to static content? [Y/N] (Y): ")
                .input((value)=>{

                    if(value==="n" || value==="N"){
                        value=false;
                    }
                    else{
                        value=true;
                    }
            
                    data.assetsCache=value;
            
                    next();
                });

        },
        (next)=>{

            c_
                .echo("  Q: ","cyan").echo("Do you want to use a database? [Y/N] (Y): ")
                .input((value)=>{

                    if(value==="n" || value==="N"){
                        value=false;
                    }
                    else{
                        value=true;
                    }
            
                    data.useDatabase=value;
            
                    next();

                });
        },
        (next)=>{

            c_
                .echo("  Q: ","cyan").echo("Do you want to use the element class \"Model\"? [Y/N] (Y): ")
                .input((value)=>{

                    if(value==="n" || value==="N"){
                        value=false;
                    }
                    else{
                        value=true;
                    }
            
                    data.useModel=value;
            
                    next();
                });

        },
        (next)=>{

            c_
                .echo("  Q: ","cyan").echo("Do you want to use the element class \"Table\"? [Y/N] (Y): ")
                .input((value)=>{

                    if(value==="n" || value==="N"){
                        value=false;
                    }
                    else{
                        value=true;
                    }
            
                    data.useTable=value;
            
                    next();
                });

        },
        (next)=>{

            c_
                .echo("  Q: ","cyan").echo("Do you want to use the element class \"TableView\"? [Y/N] (Y): ")
                .input((value)=>{

                    if(value==="n" || value==="N"){
                        value=false;
                    }
                    else{
                        value=true;
                    }
            
                    data.useTableView=value;
            
                    next();
                });

        },
        (next)=>{

            c_
                .echo("  Q: ","cyan").echo("Do you want to use the element class \"Pack\"? [Y/N] (Y): ")
                .input((value)=>{

                    if(value==="n" || value==="N"){
                        value=false;
                    }
                    else{
                        value=true;
                    }
            
                    data.usePack=value;
            
                    next();
                });

        },
        (next)=>{

            c_
                .echo("  Q: ","cyan").echo("Do you want to use the element class \"Ui\"? [Y/N] (Y): ")
                .input((value)=>{

                    if(value==="n" || value==="N"){
                        value=false;
                    }
                    else{
                        value=true;
                    }
            
                    data.useUi=value;
            
                    next();
                });
        },
        (next)=>{

            c_
                .echo("  Q: ","cyan").echo("Do you want to use the element class \"Shell\"? [Y/N] (Y): ")
                .input((value)=>{

                    if(value==="n" || value==="N"){
                        value=false;
                    }
                    else{
                        value=true;
                    }
            
                    data.useShell=value;
            
                    next();

                });
        },
        (next)=>{
            
            c_
                .echo("  ----------------------------------------------------------------\n")
                .echo("    Project Name               : "+data.name+"\n")
                .echo("    Debug Mode                 : "+data.debugMode+"\n")
                .echo("    SSL Verify                 : "+data.sslVerify+"\n")
                .echo("    port Number                : "+data.port+"\n")
                .echo("    host                       : "+data.host+"\n")
                .echo("    Response Header(text/html) : "+data.responseHeader+"\n")
                .echo("    Assets Directory Name      : "+data.assets+"\n")
                .echo("    Assets File Cache          : "+data.assetsCache+"\n")
                .echo("    Use Model                  : "+data.useModel+"\n")
                .echo("    Use Table                  : "+data.useTable+"\n")
                .echo("    Use TableView              : "+data.useTableView+"\n")
                .echo("    Use Pack                   : "+data.usePack+"\n")
                .echo("    Use Ui                     : "+data.useUi+"\n")
                .echo("    Use Shell                  : "+data.useShell+"\n")
                .echo("  ----------------------------------------------------------------\n")
                .echo("  Q. ","cyan").echo("Create a project with the above contents. Is it OK? [Y/N] (Y): ")
                .input((value)=>{

                    if(value=="n" || value=="N"){
                        value=false;
                    }
                    else{
                        value=true;
                    }
            
                    if(value){

                        initCreate(basePath,data);
            
                        c_
                            .echo("\n")
                            .echo("\n")
                            .echo("completed.");
                    }
                    else{
                        c_
                            .echo("\n")
                            .echo("\n")
                            .echo("Canceled.");
                    }
                    
                    c_.exit(); 

                });
        },
    ]);


    const initCreate=function(basePath,data){

        var projectPath=basePath+"/"+data.name;
    
        // mkdir project
        if(!fs.existsSync(projectPath)){
            fs.mkdirSync(projectPath);
            c_.echo("# mkdir "+projectPath+"\n");
        }
    
        // mkdir app
        if(!fs.existsSync(projectPath+"/app")){
            fs.mkdirSync(projectPath+"/app");
            c_.echo("# mkdir "+projectPath+"/app\n");
        }
    
        // mkdir config
        if(!fs.existsSync(projectPath+"/config")){
            fs.mkdirSync(projectPath+"/config");
            c_.echo("# mkdir "+projectPath+"/config\n");
        }
    
        // mkdir render
        if(!fs.existsSync(projectPath+"/render")){
            fs.mkdirSync(projectPath+"/render");
            c_.echo("# mkdir "+projectPath+"/render\n");
        }
    
        // mkdir assets directory
        if(!fs.existsSync(projectPath+"/"+data.assets)){
            fs.mkdirSync(projectPath+"/"+data.assets);
            c_.echo("# mkdir "+projectPath+"/"+data.assets+"\n");
        }
    
        if(!fs.existsSync(projectPath+"/app/Controller")){
            !fs.mkdirSync(projectPath+"/app/Controller");
            c_.echo("# mkdir "+projectPath+"/app/Controller\n");
        }
    
        if(data.useModel){
            if(!fs.existsSync(projectPath+"/app/Model")){
                !fs.mkdirSync(projectPath+"/app/Model");
                c_.echo("# mkdir "+projectPath+"/app/Model\n");
            }
        }
    
        if(data.useTable){
            if(!fs.existsSync(projectPath+"/app/Table")){
                !fs.mkdirSync(projectPath+"/app/Table");
                c_.echo("# mkdir "+projectPath+"/app/Table\n");
            }
        }

        if(data.useTableView){
            if(!fs.existsSync(projectPath+"/app/TableView")){
                !fs.mkdirSync(projectPath+"/app/TableView");
                c_.echo("# mkdir "+projectPath+"/app/TableView\n");
            }
        }
        
        if(data.usePack){
            if(!fs.existsSync(projectPath+"/app/Pack")){
                !fs.mkdirSync(projectPath+"/app/Pack");
                c_.echo("# mkdir "+projectPath+"/app/Pack\n");
            }
        }

        if(data.useUi){
            if(!fs.existsSync(projectPath+"/app/Ui")){
                !fs.mkdirSync(projectPath+"/app/Ui");
                c_.echo("# mkdir "+projectPath+"/app/Ui\n");
            }
        }

        if(data.useShell){
            if(!fs.existsSync(projectPath+"/app/Shell")){
                !fs.mkdirSync(projectPath+"/app/Shell");
                c_.echo("# mkdir "+projectPath+"/app/Shell\n");
            }
        }

        console.log(data);
    
    };

};
