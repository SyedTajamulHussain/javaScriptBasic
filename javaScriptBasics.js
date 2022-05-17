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

const pi = 3.14 // this can never change

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