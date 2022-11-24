let Bike = {make: 'Honda', model: 'CLIQ', year: 2018};
console.log('make' in Bike);  


let Vehicle = { Company1: 'Honda',
             Company2: 'Hero',
             Company3: 'Royal Enfield'
           };
delete Vehicle.Company1;
console.log(Vehicle);   


let message = "Welcome to " + "JavaTpoint";
console.log(typeof message);  

let arr = [1, 2, 3];
console.log( arr instanceof Array ); 
console.log( arr instanceof String ); 