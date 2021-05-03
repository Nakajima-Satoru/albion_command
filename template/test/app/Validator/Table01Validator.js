const { Validator } = require("albion");

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
					rule:["maxLength",100],
					message:"Enter within 100 characters.",
				},
			],
			code:[
				{
					rule:"required",
					message:"code not entered.",
				},
				{
					rule:"alphaNumeric",
					message:"Enter only half-width alphanumeric characters.",
				},
				{
					rule:["maxLength",100],
					message:"Enter within 100 characters.",
				},
			],
			message:[
				{
					rule:["maxLength",2000],
					message:"Enter within 2000 characters.",
				},
			],
		};

	}

};