var arr = [1, 2, 3, 4, 5];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var val = arr_1[_i];
    console.log(val);
}
var str = "JavaTpoint";
for (var index in str) {
    console.log('Index of ${str[index]}: ${index}');
}
var myArray = [10, 20, 30, 40, 50,];
console.log("Output of for..in loop ");
for (var index in myArray) {
    console.log(index);
}
console.log("Output of for..of loop ");
for (var _a = 0, myArray_1 = myArray; _a < myArray_1.length; _a++) {
    var val_1 = myArray_1[_a];
    console.log(val_1);
}
