//Nigerian mobile number prefixes from the four major telcos - MTN, GLO, AIRTEL & ETISALAT
var mobileNumberPrefix = [703, 706, 803, 806, 810, 813, 814, 816, 903, 705, 805, 811, 815, 905, 701, 708, 802, 808, 812, 902, 809, 817, 818, 909, 804];

//search array for specific values
function in_array(value, array){
	var index = array.indexOf(value);
	if(index == -1){
		return false;
	}else{
		return index;
	}
}

//error div
var errorDiv = document.getElementById("error");
 
//phone number text field
var phoneInput = document.getElementById("phone");
var dialingCodeFromNumber;
var prefix;
var check;
var idd;

phoneInput.addEventListener("change",function(){

	//get value from textbox
	phoneInputValue = phoneInput.value;

	//get value length
	var inputLength = phoneInputValue.length;

	//if length is less than the required length of 14
	if(inputLength <11){

		console.log("invalid length");

	//if length is equal to required length
	}else if(inputLength === 11){

		prefix = Number(phoneInputValue.substr(1,3));
		check = in_array(prefix, mobileNumberPrefix);
		if(check === false){
			console.log("invalid number");
		}else{
			console.log("Valid mobile number");
		}

	}else if(inputLength === 13){
		prefix = Number(phoneInputValue.substr(3,3));
		dialingCodeFromNumber = Number(phoneInputValue.substr(0,3));
		check = in_array(prefix, mobileNumberPrefix);
		if(check === false){
			console.log("invalid number");
		}else if((check >= 0) && (dialingCodeFromNumber === 234)){
			console.log("valid number");
		}else{
			console.log("invalid number");
		}

	}else if(inputLength === 14){

		//get mobile number prefix from entered vale
		prefix = Number(phoneInputValue.slice(4,7));

		//get international dialing code from entered value
		dialingCodeFromNumber = phoneInputValue.slice(0,4);

		//check if prefix exists in mobile prefix array
		check = in_array(prefix, mobileNumberPrefix);

		//if prefix not found in array
		if(check === false){
			console.log("invalid number");
		//if found in array
		}else if((check >= 0) && (dialingCodeFromNumber === "+234")){
			console.log("valid number");
		}else{
			console.log("invalid number");
		}
	}else if(inputLength > 14){
		console.log("invalid length");
	}
});