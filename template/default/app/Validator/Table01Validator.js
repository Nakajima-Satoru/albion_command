const { Validator } = require("m02");

module.exports = class Table01Validator extends Validator{

    constructor(ro){
        super(ro);

        this.rules = {
            name:[
                {
                    rule:"required",
                    message:"name not entered.",
                },
                {
                    rule:["maxLenght",100],
                    message:"Enter within 100 characters.",
                },
            ],
            code:[
                {
                    rule:"required",
                    message:"Code not entered.",
                },
                {
                    rule:"alphaNumeric",
                    message:"Enter only half-width alphanumeric characters.",
                },
                {
                    rule:["maxLenght",100],
                    message:"Enter within 100 characters.",
                },
            ],
            message:[
                {
                    rule:["maxLenght",2000],
                    message:"Enter within 2000 characters.",
                },
            ],
        };

    }

}