const { TableView } = require("fw_dagger");

module.exports = class TestTableView extends TableView{

    constructor(ro,option){
        super(ro,option);

        this.viewSql = "select * from table01 where id >= 3";

    }

};