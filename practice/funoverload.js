//Function Definition  
function add(a, b) {
    return a + b;
}
//Result  
console.log("Addition: " + add("Hello ", "JavaTpoint"));
console.log("Addition: " + add(30, 20));
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.foo = function (arg) {
        if (typeof (arg) === 'number')
            return arg.toString();
        if (typeof (arg) === 'string')
            return arg.length;
    };
    return A;
}());
var obj = new A();
console.log("Result: " + obj.foo(101));
console.log("Length of String: " + obj.foo("JavaTpoint"));
