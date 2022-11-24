var StudentInfo = /** @class */ (function () {
    function StudentInfo() {
    }
    StudentInfo.prototype.setValue = function (id, name) {
        this.Id = id;
        this.Name = name;
    };
    StudentInfo.prototype.display = function () {
        console.log("Id = ".concat(this.Id, ", Name = ").concat(this.Name));
    };
    return StudentInfo;
}());
var st = new StudentInfo();
st.setValue(101, "Virat");
st.display();
var std = new StudentInfo();
std.setValue("201", "Rohit");
std.display();
