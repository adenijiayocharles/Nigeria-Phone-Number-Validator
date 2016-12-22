//Nigerian mobile number prefixes from the four major telcos - MTN, GLO, AIRTEL & ETISALAT
var telcoPrefixes = [703, 706, 803, 806, 810, 813, 814, 816, 903, 705, 805, 811, 815, 905, 701, 708, 802, 808, 812, 902, 809, 817, 818, 909, 804];

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
var dialingCode, mobilePrefix, checkArray;

phoneInput.addEventListener("change",function(){

	//get value from textbox
	phoneInputValue = phoneInput.value;

	//get value length
	var inputLength = phoneInputValue.length;

	//if length is less than the required length of 14
	if(inputLength < 11){

		errorDiv.innerHTML = "Invalid gsm number length";
		errorDiv.classList.remove("valid");												
		errorDiv.classList.add("invalid");
		console.log("invalid gsm number length");

	//if length is equal to 11 (070xxxxxxxx)
	}else if(inputLength === 11){

				//get mobile number prefix - 706 or 703 - depending on telco
				mobilePrefix = Number(phoneInputValue.substr(1,3));
				firstFigure = Number(phoneInputValue[0]);

				//check if mobile prefix exists in telcoPrefixes array
				checkArray = in_array(mobilePrefix, telcoPrefixes);
				if(checkArray === false){
					errorDiv.innerHTML = "Invalid gsm number";
					errorDiv.classList.remove("valid");												
					errorDiv.classList.add("invalid");			
					console.log("invalid gsm number");
				}else if(checkArray > 0 && firstFigure === 0){
					errorDiv.innerHTML = "Valid gsm number";
					errorDiv.classList.remove("invalid");				
					errorDiv.classList.add("valid");												
					console.log("Valid gsm number");
				}else{
					errorDiv.innerHTML = "Invalid gsm number";
					errorDiv.classList.remove("valid");												
					errorDiv.classList.add("invalid");			
					console.log("invalid gsm number");

				}

	//if length is equal to 13 (23470xxxxxxxx)
	}else if(inputLength === 13){

				//get mobile number prefix - 706 or 703 - depending on telco
				mobilePrefix = Number(phoneInputValue.substr(3,3));

				//get dialling code from mobile number
				dialingCode = Number(phoneInputValue.substr(0,3));

				//check if mobile prefix exists in telcoPrefixes array		
				checkArray = in_array(mobilePrefix, telcoPrefixes);
				if(checkArray === false){
					
					errorDiv.innerHTML = "Invalid gsm number";
					errorDiv.classList.remove("valid");												
					errorDiv.classList.add("invalid");					
					console.log("invalid gsm number");

				}else if((checkArray >= 0) && (dialingCode === 234)){

					errorDiv.innerHTML = "Valid gsm number";
					errorDiv.classList.remove("invalid");				
					errorDiv.classList.add("valid");												
					console.log("Valid gsm number");

				}else{

					errorDiv.innerHTML = "Invalid gsm number";
					errorDiv.classList.remove("valid");												
					errorDiv.classList.add("invalid");				
					console.log("invalid gsm number");

				}

//if length is equal to 14 (+23470xxxxxxxx)
	}else if(inputLength === 14){

				//get mobile number prefix from entered value
				mobilePrefix = Number(phoneInputValue.slice(4,7));

				//get dialling code from mobile number - +234
				dialingCode = phoneInputValue.slice(0,4);

				//check if prefix exists in mobile prefix array
				checkArray = in_array(mobilePrefix, telcoPrefixes);

				//if prefix not found in array
				if(checkArray === false){
					
					errorDiv.innerHTML = "Invalid gsm number";
					errorDiv.classList.remove("valid");												
					errorDiv.classList.add("invalid");				
					console.log("invalid gsm number");

				//if found in array
				}else if((checkArray >= 0) && (dialingCode === "+234")){

					errorDiv.innerHTML = "Valid gsm number";
					errorDiv.classList.remove("invalid");				
					errorDiv.classList.add("valid");						
					console.log("Valid gsm number");

				}else{

					errorDiv.innerHTML = "Invalid gsm number";
					errorDiv.classList.remove("valid");												
					errorDiv.classList.add("invalid");				
					console.log("invalid gsm number");

				}
	}else if(inputLength > 14){
		errorDiv.innerHTML = "invalid gsm number length";
		errorDiv.classList.remove("valid");												
		errorDiv.classList.add("invalid");				
		console.log("invalid gsm number length");
	}
});