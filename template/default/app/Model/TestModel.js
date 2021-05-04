const { Model } = require("fw_dagger");

module.exports=class TestModel extends Model{

    handleBefore(){
        this.ro.echo("testmodel handlebefore.....");
    }

    run(){
        return "test model no test";
    }

};