const { Model } = require("albion");

module.exports=class TestModel extends Model{

    handleBefore(){
        this.ro.echo("testmodel handlebefore.....");
    }

    run(){
        return "test model no test";
    }

};