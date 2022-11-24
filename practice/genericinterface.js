function printName(theInput) {
    console.log("Name: ".concat(theInput.name, " \nAge: ").concat(theInput.age, " \nProfession: ").concat(theInput.profession));
}
var player = {
    name: 'Rohit Sharma', age: 30, profession: 'Cricket Player'
};
printName(player);
