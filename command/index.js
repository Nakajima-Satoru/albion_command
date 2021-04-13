var cmd=process.argv;
cmd.shift();
cmd.shift();

if(cmd[0]=="create"){

    var path=cmd[1];
    
    var templateName=cmd[2];
    if(!templateName){
        templateName="default";
    }

    var create=require("./create.js");
    create(path,templateName);

}
else if(cmd[0]=="run"){

    var path=cmd[1];

    var { http } = require("albion");
    http.listen(path);

}
else{

}

