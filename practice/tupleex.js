var arrTuple = [101, "JavaTpoint", 105, "Abhishek"];
console.log(arrTuple);
var empTuple = ["Rohit Sharma", 25, "JavaTpoint"];
console.log("Items: " + empTuple);
console.log("Length of Tuple Items before push: " + empTuple.length); // returns the tuple size  
empTuple.push(10001); // append value to the tuple   
console.log("Length of Tuple Items after push: " + empTuple.length);
console.log("Items: " + empTuple);
console.log("Length of Tuple Items before pop: " + empTuple.length); // returns the tuple size  
empTuple.pop(); // removed value to the tuple   
console.log("Length of Tuple Items after pop: " + empTuple.length);
console.log("Items: " + empTuple);
empTuple[1] = 30;
console.log("Name of the Employee is: " + empTuple[0]);
console.log("Age of the Employee is: " + empTuple[1]);
console.log(empTuple[0] + " is working in " + empTuple[2]);
empTuple = [];
console.log(empTuple);
