let arr = [1, 2, 3, 4, 5];  
  
for (var val of arr) {  
  console.log(val);  
}  

let str:any = "JavaTpoint";  
  
for (let index in str) {  
  console.log('Index of ${str[index]}: ${index}');  
}  

let myArray = [10, 20, 30, 40, 50,];  
console.log("Output of for..in loop ");  
for (let index in myArray) {  
   console.log(index);  
}  
console.log("Output of for..of loop ");  
for (let val of myArray) {  
   console.log(val);  
}  