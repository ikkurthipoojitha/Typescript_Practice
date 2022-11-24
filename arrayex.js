var arr;
arr = [1, 2, 3, 4];
console.log("Array[0]: " + arr[0]);
console.log("Array[1]: " + arr[1]);
console.log("multi dimensional array");
var mArray = [[1, 2, 3], [5, 6, 7]];
console.log(mArray[0][0]);
console.log(mArray[0][1]);
console.log(mArray[0][2]);
console.log();
console.log(mArray[1][0]);
console.log(mArray[1][1]);
console.log(mArray[1][2]);
console.log("array object");
var ar = new Array("JavaTpoint", "2200", "Java", "Abhishek");
for (var i = 0; i < ar.length; i++) {
    console.log(ar[i]);
}
var j;
// let ar:string[] = ["JavaTpoint", "2300", "Java", "Abhishek"];  
for (j in ar) {
    console.log(ar[j]);
}
