const { Table } = require("m02");

module.exports = class Table01Table extends Table{

    constructor(ro){
        super(ro);

        this.setSurrogateKey("id");

        this.setTimeStamp({
            created:"created",
            modified:"updated",
        });

        this.setLogicalDeleteKey({
            field:"delete_flg",
            type:"integer",
        });
        
    }

};