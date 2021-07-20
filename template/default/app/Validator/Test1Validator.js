
const { Validator } = require("m02");

module.exports = class Test1Validator extends Validator{

	constructor(ro){
		super(ro);

		this.rules = {
			required:[
				{
					rule:"required",
					message:"This input field is required.",
				},
			],
			requiredIf:[
				{
					rule:["requiredIf","requiredIfAgree",1],
					message:"If you select the above checkbox, this entry field is required.",
				},
			],
			requiredWith:[
				{
					rule:["requiredWith",[
						"requiredWith01",
						"requiredWith02",
						"requiredWith03",
					]],
					message:"This entry field is required if you select all of the following.",
				},
			],
			requiredWithOr:[
				{
					rule:["requiredWithOr",[
						"requiredWithOr01",
						"requiredWithOr02",
						"requiredWithOr03",
					]],
					message:"This entry field is required if you select any of the following.",
				},
			],
			confirmed:[
				{
					rule:["confirmed","confirmed_res"],
					message:"2 Enter the same value",
				},
			],
		};

		
		this.rules_v2 = {
			alphaNumeric:[
				{
					rule:"alphaNumeric",
					message:"Enter only half-width alphanumeric characters."
				}
			],
			alphaNumeric_allow:[
				{
					rule:["alphaNumeric",".=@-_"],
					message:"Enter only half-width alphanumeric characters and permitted special characters.",
				},
			],
			numeric:[
				{
					rule:"numeric",
					message:"Enter only half-width numeric characters."
				}
			],
			numeric_allow:[
				{
					rule:["numeric","-_"],
					message:"Only half-width numbers and the following special characters are allowed.",
				},
			],
			length:[
				{
					rule:["length",6],
					message:"Enter 6 characters."
				}
			],
			minLength:[
				{
					rule:["minLength",6],
					message:"Enter at least 6 characters."
				}
			],
			maxLength:[
				{
					rule:["maxLength",6],
					message:"Enter within 6 characters."
				}
			],
			betweenLength:[
				{
					rule:["betweenLength",4,20],
					message:"Enter within the range of 4 to 20 characters.",
				},
			],
			value:[
				{
					rule:["value",6],
					message:"Enter 6 as an integer value.",
				},
			],
			minValue:[
				{
					rule:["minValue",6],
					message:"Allow 6 or more as an integer value.",
				},
			],
			maxValue:[
				{
					rule:["maxValue",10],
					message:"Allow 10 or more as an integer value.",
				},
			],
			betweenValue:[
				{
					rule:["betweenValue",4,20],
					message:"Enter a value in the range of 4 to 20.",
				},
			],
		};


		this.rules_v3 = {
			selectedCount:[
				{
					rule:["selectedCount",4],
					message:"Be sure to select only 4."
				},
			],
			minSelectedCount:[
				{
					rule:["minSelectedCount",3],
					message:"Be sure to select 3 or more."
				},
			],
			maxSelectedCount:[
				{
					rule:["maxSelectedCount",7],
					message:"Up to 7 can be selected."
				},
			],
			betweenSelectedCount:[
				{
					rule:["betweenSelectedCount",3,7],
					message:"Up to 3-7 can be selected.",
				},
			],
			like:[
				{
					rule:["like","abc"],
					message:"Allow if \"abc\" is included in the string",
				},
			],
			any:[
				{
					rule:["any",[
						"aaa",
						"bbb",
						"ccc",
					]],
					message:"Enter one of \"aaa\", \"bbb\", and \"ccc\".",
				},
			],
		};


		this.rules_v4 = {
			date:[
				{
					rule:"date",
					message:"Not in date format.",
				},
			],
			minDate:[
				{
					rule:["minDate","2021-01-03"],
					message:"Enter after the specified date.",
				},
			],
			maxDate:[
				{
					rule:["maxDate","2021-12-31"],
					message:"Enter before the specified date.",
				},
			],
			betweenDate:[
				{
					rule:["betweenDate","2021-01-01","2021-12-31"],
					message:"Enter a date between \"2021-01-01\" and \"2021-12-31\".",
				},
			],
			isInt:[
				{
					rule:"isInt",
					message:"Entering an integer value.",
				},
			],
			isBool:[
				{
					rule:"isBool",
					message:"Enter a Boolean value.",
				},
			],
			isEmail:[
				{
					rule:"isEmail",
					message:"Enter the email format.",
				},
			],
			isTel:[
				{
					rule:"isTel",
					message:"Enter phone number format.",
				},
			],
			isIp:[
				{
					rule:"isIp",
					message:"Enter IP address format.",
				},
			],
			isUrl:[
				{
					rule:"isUrl",
					message:"Enter URL format.",
				},
			],
			isZipJP:[
				{
					rule:"isZipJP",
					message:"Enter Japanese postal code format.",
				},
			],
			isKatakana:[
				{
					rule:"isKatakana",
					message:"Enter only full-width katakana.",
				},
			],
			isHiragana:[
				{
					rule:"isHiragana",
					message:"Enter only full-width hiragana.",
				},
			],
			allowedBeforeToday:[
				{
					rule:"allowedBeforeToday",
					message:"Only dates before today are allowed",
				},
			],
			allowedAfterToday:[
				{
					rule:"allowedAfterToday",
					message:"Only dates afer today are allowed",
				},
			],			
		};

		this.rules_v5 = {
			custom:[
				{
					rule:"custom",
				},
			],
			custom2:[
				{
					rule:function(value){

						if(value=="japan"){
							return true;
						}

						return false;
					},
				},
			],
			custom3:[
				"required",
				"betweenLength:4,20",
			],
		};

	}


	custom(value){

		if(value=="abc" || value=="def"){
			return true;
		}

		return false;
	}
};