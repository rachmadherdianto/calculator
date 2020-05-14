
let prevnumber = ''
let calcoperator=''
let currnumber='0'


const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
	calculatorScreen.value = number;
}

const numbers = document.querySelectorAll(".number");

const inputNumber = (number) => {
	if (currnumber==='0') {
	  currnumber = number
	} else {
	  currnumber += number
	}
}

numbers.forEach((number) => { 
	number.addEventListener("click",(event) => {
	   inputNumber(event.target.value);
	   updateScreen(currnumber);
	})
})

const inputOperator = (operator) => {
	if (currnumber != '') {prevnumber=currnumber;}
	calcoperator=operator;
	currnumber='';
}

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => { 
	operator.addEventListener("click",(event) => {
	   inputOperator(event.target.value);
	})
})

const calculate = () => {
	let result='';

	switch (calcoperator) {
		default :
		  break;
		case "+" :
		  result = parseFloat(prevnumber)+parseFloat(currnumber);
		  break
		case "-" :
		  result = parseFloat(prevnumber)-parseFloat(currnumber);
		  break
		case "/" :
		  result = parseFloat(prevnumber)/parseFloat(currnumber);
		  break
		case "*" :
		  result = parseFloat(prevnumber)*parseFloat(currnumber);
		  break      
	}
	currnumber = result;
	calcoperator = '';
}

const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click",(event) => {
	   calculate();
	   updateScreen(currnumber);
	   currnumber='0';
	   prevnumber='';	
	})

const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener("click",(event) => {
	   currnumber='0';
	   prevnumber='';	
	   updateScreen(currnumber);
	})

const decimal = document.querySelector(".decimal");

decimal.addEventListener("click",(event) => {
	  if (currnumber.includes('.')) {return}
	  currnumber += '.';
	  updateScreen(currnumber);
	})

const percent = document.querySelector(".percentage");

percent.addEventListener("click",(event) => {
	  currnumber = currnumber/100;
	  updateScreen(currnumber);
	})