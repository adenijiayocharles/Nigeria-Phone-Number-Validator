//Nigerian mobile number prefixes from the four major telcos - MTN, GLO, AIRTEL & ETISALAT
var mobileNumberPrefix = [703, 706, 803, 806, 810, 813, 814, 816, 903, 705, 805, 811, 815, 905, 701, 708, 802, 808, 812, 902, 809, 817, 818, 909, 804];


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
 
//Nigeria's international dialling code
const IDD = "+234";

//maximum length of required value
const maxlength = 14;

//phone number text field
var phoneInput = document.getElementById("phone");

phoneInput.addEventListener("change",function(){
	phoneInputValue = phoneInput.value;
	var inputLength = phoneInputValue.length;
	// console.log(inputLength);
	var firstFive = Number(phoneInputValue.slice(4,7));
	var inarray = in_array(firstFive, mobileNumberPrefix);
	if(inarray === false){
		console.log("Not nigerian mobile number");
	}else{
		if(inputLength === 14){
			console.log("right number");
		}else if(inputLength < 14){
			console.log("invalid");
		}
		// var merged = IDD + mobileNumberPrefix[inarray];
		// console.log(merged);
	}
});