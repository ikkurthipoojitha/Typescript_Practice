function identity(arg) {
    return arg;
}
var output1 = identity("myString");
var output2 = identity(100);
console.log(output1);
console.log(output2);
function getItems(items) {
    return new Array().concat(items);
}
var arrNumber = getItems([10, 20, 30]);
var arrString = getItems(["Hello", "JavaTpoint"]);
arrNumber.push(40); // Correct  
arrNumber.push("Hi Javatpoint"); // Compilation Error  
arrString.push("Hello TypeScript"); // Correct  
arrString.push(50); // Compilation Error  
console.log(arrNumber);
console.log(arrString);
