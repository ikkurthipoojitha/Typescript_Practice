function identity<T>(arg: T): T {    
    return arg;    
}    
let output1 = identity<string>("myString");    
let output2 = identity<number>( 100 );  
console.log(output1);  
console.log(output2);  

function getItems<T>(items : T[] ) : T[] {  
    return new Array<T>().concat(items);  
}  
let arrNumber = getItems<number>([10, 20, 30]);  
let arrString = getItems<string>(["Hello", "JavaTpoint"]);  
arrNumber.push(40); // Correct  
arrNumber.push("Hi Javatpoint"); // Compilation Error  
arrString.push("Hello TypeScript"); // Correct  
arrString.push(50); // Compilation Error  
console.log(arrNumber);  
console.log(arrString);  
