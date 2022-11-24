class Employee {  
    private _salary: number;  
    private _name: string;  
  
    @configurable(false)  
    get salary() { return 'Rs. ${this._salary}'; }  
    set salary(salary: any) { this._salary = +salary; }  
  
    @configurable(true)  
    get name() { return 'Sir/Madam, ${this._name}'; }  
    set name(name: string) { this._name = name; }  
}  