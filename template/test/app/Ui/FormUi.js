const { Ui } = require("albion");

module.exports = class FormUi extends Ui{

	/**
	 * start
	 * @param {*} params 
	 * @returns 
	 */
	start(params){

		if(!params){
			params={};
		}

		if(!params.method){
			params.method="post";
		}

		var optStr = this._optionString(params);
		var str="<form "+optStr+">";

		return str;
	}

	/**
	 * end
	 * @returns 
	 */
	end(){
		return "</form>";
	}

	/**
	 * tagInput
	 * @param {*} name 
	 * @param {*} params 
	 * @returns 
	 */
	tagInput(name,params){

		if(!params){
			params={};
		}

		if(!params.type){
			params.type="text";
		}

		if(name){
			params.name=name;
		}

		var optStr = this._optionString(params);
		var str="<input "+optStr+">";

		return str;
	}

	/**
	 * tagTextarea
	 * @param {*} name 
	 * @param {*} params 
	 * @returns 
	 */
	tagTextarea(name,params){

		if(!params){
			params={};
		}

		params.name=name;

		var value="";
		if(params.value){
			value=params.value;
		}

		var optStr = this._optionString(params,[
			"value",
		]);
		var str="<textarea "+optStr+">"+value+"</textarea>";

		return str;
	}

	tagSelect(name,selectedList,params){

		if(!params){
			params={};
		}

		params.name=name;

		var optStr = this._optionString(params,[
			"value",
		]);

		var optionTagStr="";

		if(typeof selectedList == "string"){
			selectedList = [selectedList];
		}

		if(params.empty){
			optionTagStr+="<option value=\"\">"+params.empty+"</option>";
		}

		if(selectedList instanceof Array){
			for(var n=0;n<selectedList.length;n++){
				var value=selectedList[n];
				
				optionTagStr+="<option value=\""+n+"\">"+value+"</option>";
			}
		}
		else{
			var _colum=Object.keys(selectedList);
			for(var n=0;n<_colum.length;n++){
				var field=_colum[n];
				var value=selectedList[field];
				optionTagStr+="<option value=\""+field+"\">"+value+"</option>";
			}
		}		

		var str="<select "+optStr+">"+optionTagStr+"</select>";

		return str;
	}

	/**
	 * tagRadio
	 * @param {*} name 
	 * @param {*} selectedList 
	 * @param {*} params 
	 * @returns 
	 */
	tagRadio(name,selectedList,params){

		if(!params){
			params={};
		}

		params.type="radio";

		var str="";
		if(selectedList instanceof Array){
			for(var n=0;n<selectedList.length;n++){
				var value=selectedList[n];
				params.value=n;
				str+="<label>"+this.tagInput(name,params)+value+"</label>";
			}
		}
		else{
			var _colum=Object.keys(selectedList);
			for(var n=0;n<_colum.length;n++){
				var field=_colum[n];
				var value=selectedList[field];

				params.value=field;
				str+="<label>"+this.tagInput(name,params)+value+"</label>";
			}
		}
		
		return str;
	}

	/**
	 * tagCheckbox
	 * @param {*} name 
	 * @param {*} selectedList 
	 * @param {*} params 
	 * @returns 
	 */
	tagCheckbox(name,selectedList,params){

		if(!params){
			params={};
		}

		var names = name+"[]";

		if(typeof selectedList == "string"){
			selectedList = {1:selectedList};
			names=name;
		}


		params.type="checkbox";

		var str="";
		if(selectedList instanceof Array){
			for(var n=0;n<selectedList.length;n++){
				var value=selectedList[n];
				params.value=n;
				str+="<label>"+this.tagInput(names,params)+value+"</label>";
			}
		}
		else{
			var _colum=Object.keys(selectedList);
			for(var n=0;n<_colum.length;n++){
				var field=_colum[n];
				var value=selectedList[field];

				params.value=field;
				str+="<label>"+this.tagInput(names,params)+value+"</label>";
			}
		}
		
		return str;
	}


	/**
	 * tagSubmitBtn
	 * @param {*} name 
	 * @param {*} params 
	 * @returns 
	 */
	tagSubmitBtn(name,params){
		params.type="submit";
		params.value=name;

		var str=this.tagInput(null,params);

		return str;
	}

	/**
	 * tagButton
	 * @param {*} name 
	 * @param {*} params 
	 * @returns 
	 */
	tagButton(name,params){
		params.type="button";
		params.value=name;

		var str=this.tagInput(null,params);
		return str;
	}

	/**
	 * _optionString
	 * @param {*} params 
	 * @param {*} ignore 
	 * @returns 
	 */
	_optionString(params,ignore){
		
		if(!ignore){
			ignore=[];
		}

		var optStr="";
		var colum=Object.keys(params);
		for(var n=0;n<colum.length;n++){
			var field=colum[n];
			if(!ignore.includes(field)){
				var value=params[field];
				optStr+=field+"=\""+value+"\"";
			}
		}
		return optStr;
	}
	
};