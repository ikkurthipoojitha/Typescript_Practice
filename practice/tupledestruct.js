var empTuple = ["Rohit Sharma", 25, "JavaTpoint"];
var emp = empTuple[0], student = empTuple[1];
console.log(emp);
console.log(student);
function display(tuple_values) {
    for (var i = 0; i < empTuple.length; i++) {
        console.log(empTuple[i]);
    }
}
//Calling tuple in function    
display(empTuple);
