//Nigerian mobile number prefixes from the four major telcos - MTN, GLO, AIRTEL & ETISALAT
var mobileNumberPrefix = [703, 706, 803, 806, 810, 813, 814, 816, 903, 705, 805, 811, 815, 905, 701, 708, 802, 808, 812, 902, 809, 817, 818, 909, 804];


function in_array(value, array){
	var index = array.indexOf(value);
	if(index == -1){
		return false;
	}else{
		return true;
	}
}

//error div
var errorDiv = document.getElementById("error");
 
//Nigeria's international dialling code
const IDD = "+234";

//maximum length of required value
const maxlength = 14;

//phone number text field
var phoneInput = document.getElementById("phone");


phoneInput.addEventListener("keyup",function(){
	//get value from text box
	var phoneInputValue = phoneInput.value;

	//get length of input
	var inputLength = phoneInputValue.length;

	//get first four letters of entered value
	if(inputLength < maxlength){
		errorDiv.innerHTML = "Invalid length";
	}else if(inputLength >= 14){
		errorDiv.innerHTML = "";
	}

	if(phoneInputValue === ""){
		errorDiv.innerHTML = "";	
	}

	//get first four characters in entered value
	var firstValues = String(phoneInputValue.slice(0, 4));
	
	if(firstValues === "+234"){
		errorDiv.innerHTML = "Nigerian Number";
	}else{
		console.log("Not Nigerian Number");
	}
});

phoneInput.addEventListener("change",function(){
	phoneInputValue = phoneInput.value;
	var firstFive = Number(phoneInputValue.slice(4,7));
	var inarray = in_array(firstFive, mobileNumberPrefix);
	console.log(inarray);


});