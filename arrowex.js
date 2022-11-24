var sum = function (a, b) {
    return a + b;
};
console.log(sum(20, 30));
var Print = function () { return console.log("Hello JavaTpoint!"); };
Print();
var Student = /** @class */ (function () {
    function Student(code, name) {
        var _this = this;
        this.showDetail = function () { return console.log("Student Code: " + _this.studCode + '\nStudent Name: ' + _this.studName); };
        this.studName = name;
        this.studCode = code;
    }
    return Student;
}());
var stud = new Student(101, 'Abhishek Mishra');
stud.showDetail();
