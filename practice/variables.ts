// function a() {  
//     var msg = " Welcome to JavaTpoint !! ";  
//     return msg;  
// }  
// a();  
function a() {  
    var x = 50;  
    return function b() {  
         var y = x+5;  
         return y;  
    }  
}  
var  b = a();  
console.log(b());       