var myNumber = 12345;
var myNumber_1 = 12.8789;
var myNumber_2 = 12667.976;
var myNumber_3 = 12.5779;
var myNumber_4 = 1234;
var myNumber_5 = new Number(123);
console.log("Number Method: toExponential()");
console.log(myNumber.toExponential());
console.log(myNumber.toExponential(2));
console.log("Number Method: toString()");
console.log(myNumber.toString());
console.log(myNumber.toString(4));
console.log("Number Method: toFixed()");
console.log(myNumber_1.toFixed());
console.log(myNumber_1.toFixed(3));
console.log("Number Method: toLocaleString()");
console.log(myNumber_2.toLocaleString()); // returns in US English  
console.log("Number Method: toPrecision()");
console.log(myNumber_3.toPrecision(1));
console.log(myNumber_3.toPrecision(3));
console.log("Number Method: tovalueOf()");
console.log(myNumber_5);
console.log(myNumber_5.valueOf());
console.log(typeof (myNumber));
