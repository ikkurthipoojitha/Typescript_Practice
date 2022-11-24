let empTuple = ["Rohit Sharma", 25, "JavaTpoint"];  
let [emp, student] = empTuple;  
console.log(emp);  
console.log(student);  
function display(tuple_values:any[]) {    
    for(let i = 0;i<empTuple.length;i++) {     
       console.log(empTuple[i]);    
    }      
 }    
 //Calling tuple in function    
 display(empTuple);  
 