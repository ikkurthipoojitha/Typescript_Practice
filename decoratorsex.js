var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "salary", {
        get: function () { return 'Rs. ${this._salary}'; },
        set: function (salary) { this._salary = +salary; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "name", {
        get: function () { return 'Sir/Madam, ${this._name}'; },
        set: function (name) { this._name = name; },
        enumerable: false,
        configurable: true
    });
    __decorate([
        configurable(false)
    ], Employee.prototype, "salary");
    __decorate([
        configurable(true)
    ], Employee.prototype, "name");
    return Employee;
}());
