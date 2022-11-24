function showDetails(id, name, e_mail_id) {
    console.log("ID:", id, " Name:", name);
    if (e_mail_id != undefined)
        console.log("Email-Id:", e_mail_id);
}
showDetails(101, "Virat Kohli");
showDetails(105, "Sachin", "sachin@javatpoint.com");
function displayName(name, greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    return greeting + ' ' + name + '!';
}
console.log(displayName('JavaTpoint')); //Returns "Hello JavaTpoint!"  
console.log(displayName('JavaTpoint', 'Hi')); //Returns "Hi JavaTpoint!".  
console.log(displayName('Sachin')); //Returns "Hello Sachin!"  
function sum(a) {
    var b = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        b[_i - 1] = arguments[_i];
    }
    var result = a;
    for (var i = 0; i < b.length; i++) {
        result += b[i];
    }
    return result;
}
var result1 = sum(3, 5);
var result2 = sum(3, 5, 7, 9);
console.log(result1 + "\n" + result2);
