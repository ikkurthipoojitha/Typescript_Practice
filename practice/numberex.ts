let first: number = 12.0;             // number   
let second: number = 0x37CF;          // hexadecimal  
let third: number = 0o377 ;           // octal  
let fourth: number = 0b111001;        // binary   
  
console.log(first);           // 123  
console.log(second);          // 14287  
console.log(third);           // 255  
console.log(fourth);          // 57  
console.log("Number Properties: ");   
console.log("A number variable can hold maximum value: " + Number.MAX_VALUE);   
console.log("A number variable can hold minimum value: " + Number.MIN_VALUE);   
console.log("Value of Negative Infinity: " + Number.NEGATIVE_INFINITY);   
console.log("Value of Positive Infinity:" + Number.POSITIVE_INFINITY);  
console.log("Example of NaN: " +Math.sqrt(-5)); 