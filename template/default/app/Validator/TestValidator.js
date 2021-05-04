const { Validator } = require("fw_dagger");

module.exports = class TestValidator extends Validator{

    beforeValidate(data){

        this.rules={
            value1:{
                0:{
                    rule:"required",
                    message:"value1 is not entered.",
                },
            },
            value2:{
                0:{
                    rule:["minLength",6],
                    message:"Enter at least 6 characters.",
                },
            },
            value3:{
                0:{
                    rule:["maxLength",20],
                    message:"Enter within 20 characters.",
                },
            },
        };

    }

};