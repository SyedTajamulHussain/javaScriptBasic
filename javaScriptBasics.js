// JavaScript source code basics
console.log("welcome to JavaScript")

/* 
Data types in JavaScript : 
undefined
null
boolean 
symbol
number
object
*/

//Variable can be declared in 3 way in JavaScript

var myName = "Syed Tajamul Hussain" ;
console.log(myName);

let address = "Shalimar" //only to be used only in scope defined

const pi = 3.14   //this can never change

//initialize a Variable

var a=5;
var b =7;
var c =("I am a ")
console.log(b);
a=b;
console.log(a);

a= a+ 5;
b =b+3
c=c+"String";
console.log(a);
console.log(b);
console.log(c);

//js is case sensative

//Artimatical operation is JavaScript
var sum = 1+1;
console.log(sum);
var difference = 1-1;
console.log(difference);
var multiplication = 8*8;
console.log(multiplication);

//String concantation

var concontation = "this is start. " + "this is end"
console.log(concontation);

var mystr = "this is first sentence. "
mystr += "this is 2nd sentence"
console.log(mystr);

var mylastname = "Hussain"
var newStr = " My last name is " + mylastname + " what is your last name";
console.log(newStr);

//finding the length
console.log(mylastname.length);


//find first character of string.
firstLetter = mylastname[0]
console.log(firstLetter);
//string immutability 
newStr = "string value is changed"
console.log(newStr);
//find last character in string even if you dont know the length of string
lastletterofFirstName = mylastname[mylastname.length -1];
console.log(lastletterofFirstName);
// how to use bracket notation to get the last letter of a string
lastletterofFirstName = mylastname[mylastname.length -3];
console.log(lastletterofFirstName);
//word blanks

function personalDetail(name, address, phoneNumber, status) {
var result = "";
result += "Name of the candidate" + " "+ name + " "+ "Address of the candidate " + " "+ address + " "+"Phone # of canidate"+ " "+  phoneNumber + " "+"Status of candidate " + " "+ status;
return result;
}


console.log(personalDetail("Tajamul" , "Kashmir","123","Active"));
console.log(personalDetail("mohd" , "Noida","12345","Active"));

//Store multiple value with arrays

myArray = ["Shalimar", 1];
console.log(myArray);
//nested Array - when one of the element in array is in other array
newArray = [["First array",1],["second Array",2]];
console.log(newArray);
//access array data with indexes
var mydataArray = [20,30,40];
mydata =mydataArray[0];
console.log(mydata);
//modifying array data with indexes 
var orginalArray = ["help", "save","soul"];
console.log(orginalArray);
orginalArray[0]="savemySoul";
console.log(orginalArray);
//access multiple dimension array with indexes
var multipleDimensionArray =[[1,2,3],[4,5,6],[7,8,9],[[10,11,12],13.14]];
var mymultipleDimensionArray =multipleDimensionArray[0][2];
console.log(mymultipleDimensionArray);
//push function to append data
multipleDimensionArray.push([15,16]);
console.log(multipleDimensionArray);
//munipulate array with pop() --i,e will remove last index from array and can be stored in another Variable
var removeFromArray = multipleDimensionArray.pop();
console.log(removeFromArray);
console.log(multipleDimensionArray);
//Shift function - first element will be removed from arrray
var removeFromArray = multipleDimensionArray.shift();
console.log(removeFromArray);
console.log(multipleDimensionArray);
//munipulate arrays with unshift() function --  added vaule
var munipArray = removeFromArray.unshift("TOM");
console.log(munipArray);
//Shopping list ..how to create nested arrays
var nestedArray =[["milk",2],["cereal",1],["bread",3],["butter", 1]];
//how to call reusable functions in js
function reusableFuction(){
	console.log("I am reusable function");
}
reusableFuction();

//passing values to function with arguments
function addition(a,b){
	console.log(a+b);
}
addition(10,5);
addition(10,10);

//Global scope of function

globalVariable = "I am global variable";

function accessGlobalvariable(){
	var localVariable = "I am local variable ";
	console.log(globalVariable);
}

accessGlobalvariable();

//local scope and function

console.log(globalVariable);
//console.log(localVariable);  //this will throw error as scope is limited only to fuction

//local variable take precedence over global variable if they have same name

var cloth = "t-Shirt";

function outFit(){
	var cloth = "jeans";

return cloth;
}

console.log(outFit());
console.log(cloth); // Printing variable - this will sysout global variable

//return a value from a function with return

function minusSeven(num){
	
	return num-7;
}

console.log(minusSeven(10));

function mutiplication(num) {
	
	return num *5;
}
console.log(mutiplication(10));

//Assignment of returned value.

var result =0;

function add(input) {
	return input +1;

}

result =add(10);  //Assignment 
console.log(result);

//Stand in line

var testArray =[1,2,3,4,5,6,7];

function nextInArray(arr ,item){
	arr.push(item);

return arr.shift();
}

console.log("Before"  + JSON.stringify(testArray));
console.log(nextInArray(testArray,8));
console.log("After",JSON.stringify(testArray));


//boolean values
function boolenconcept(){
	return true;
}

//if statements

var isIttrue = false;

function ifStatement(isIttrue) {
	if(isIttrue) {

	return "yes this is true";

	}
	return " not this is not true";

}
console.log(ifStatement(isIttrue));




function whatIsTemperature(maxtemp) { 
	if(maxtemp == 10) {
		return "temperature is plesent"
	}
	return "temperature is hot"
}
console.log(whatIsTemperature(9));

//equals

function testEquals(value){
	if (value ==10) {
		return "equal";
	}
		return "not equal";
}


console.log(testEquals(10));
//strict equality operator uses ===
//not equal
function notEquals(value){
	if (value !=10) {
		return "equal";
	}
		return "not equal";
}

console.log(notEquals(10));
//logical operator
//testGreaterThen

function greaterThen(value){
	if (value > 100) {
		return "greater then 100";
	}
	if(value >50) {
		return "greater then 50";
	}
	return "less then 50 "
}

console.log(greaterThen(101))

// and operator

function testLogicalOperator(value) {
if (value <= 50 && value >= 25 ) {
	return "yes";
}
return "No";

}
console.log(testLogicalOperator(25));
console.log(testLogicalOperator(24));

//OR operator

function ORLogicalOperator(value) {
if (value <= 50 || value >= 25 ) {
	return "yes";
}
return "No";

}
	console.log(ORLogicalOperator(25));
	console.log(ORLogicalOperator(100));

//Else Statement

function nestedIfStatement(value){
	var result ="";
	if(value < 10) {
		result ="number is less then 10";
	}
	if (value > 10) {
		result = "number is greater then 10";
	}
	return result;
}

	console.log(nestedIfStatement(15));

// better way to write this program is to put else statement

function ifElseStatement(value){
	var result ="";
	if(value < 10) {
		result ="number is less then 10";
	} 
		else {
			result = "number is greater then 10";
	}
	return result;
} 

	console.log(ifElseStatement(8));

	//elseIf statement

	function elseIf (value) { 
		
		if (value > 10) {
			return "greater then 10";
		}
		else if (value < 5) {
			return "less then 10";
		} else {
			return "betweenn 5-10"
		}
	}
	console.log(elseIf (11)); 

	//chaining in elseIf statement
	function chainingElseIf (value) {
		if (value == "Syed") {
			return "First Name";
		}
		else if (value == "Tajamul") {
			return "middle Name"

		}
		else if(value =="hussain"){
			return  "last Name";
		}
		else if (value == "Shalimar" ) {
			return "address";
		}
		else {
			return "invalid command";
		}
	}

	console.log(chainingElseIf("Tjjhjhajamul"));