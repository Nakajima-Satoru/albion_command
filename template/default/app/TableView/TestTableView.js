const { TableVuew } = require("albion");

module.exports = class TestTableView extends TableView{

    constructor(ro,option){
        super(ro,option);

        this.sql = "select  \
            *               \
        from                \
            doecument_jp    \
        ";

    }

};