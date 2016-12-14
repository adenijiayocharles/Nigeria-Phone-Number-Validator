var mobileNumberPrefix = [0703, 0706, 0803, 0806, 0810, 0813, 0814, 0816, 0903, 0705, 0805, 0811, 0815, 0905, 0701, 0708, 0802, 0808, 0812, 0902, 0809, 0817, 0818, 0909, 0804];

var phoneInput = document.getElementById("phone");
phoneInput.addEventListener("keyup",function(){
	//get value from text box
	var phoneInputValue = phoneInput.value;

	//get length of input
	var inputLength = phoneInputValue.length;
	console.log(inputLength);
});
