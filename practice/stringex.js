var empName = "Rohit Sharma";
var compName = "JavaTpoint";
// Pre-ES6  
var empDetail1 = empName + " works in the " + compName + " company.";
// Post-ES6  
var empDetail2 = "".concat(empName, " works in the ").concat(compName, " company.");
console.log("Before ES6: " + empDetail1);
console.log("After ES6: " + empDetail2);
var multi = 'hello ' +
    'world ' +
    'my ' +
    'name ' +
    'is ' +
    'Rohit';
console.log(multi);
