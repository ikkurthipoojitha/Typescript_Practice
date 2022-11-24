let sum = (a: number, b: number): number => {  
    return a + b;  
}  
console.log(sum(20, 30));

let Print = () => console.log("Hello JavaTpoint!");  
Print();  

class Student {  
    studCode: number;  
    studName: string;  
    constructor(code: number, name: string) {  
            this.studName = name;  
            this.studCode = code;  
    }  
    showDetail = () => console.log("Student Code: " + this.studCode + '\nStudent Name: ' + this.studName)  
}  
let stud = new Student(101, 'Abhishek Mishra');  
stud.showDetail();  