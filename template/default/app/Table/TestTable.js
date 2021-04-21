const { Table } = require("albion");

module.exports = class TestTable extends Table{

    constructor(ro,option){
        super(ro,option);

        this.setTable("table01");

        this.setSurrogateKey("id");

        this.setTimeStamp({
            created:"created",
            modified:"updated",
        });

        this.setLogicalDeleteKey({
            field:"delete_flg",
            type:"boolean",
        });

    }

};