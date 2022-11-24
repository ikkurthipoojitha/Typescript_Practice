var ageMapping = new Map();
ageMapping.set("Rakesh", 40);
ageMapping.set("Abhishek", 25);
ageMapping.set("Amit", 30);
for (var _i = 0, _a = ageMapping.keys(); _i < _a.length; _i++) {
    var key = _a[_i];
    console.log("Map Keys= " + key);
}
for (var _b = 0, _c = ageMapping.values(); _b < _c.length; _b++) {
    var value = _c[_b];
    console.log("Map Values= " + value);
}
console.log("The Map Enteries are: ");
// for (let entry of ageMapping.entries()) {  
//     console.log(entry[0], entry[1]);   
// }  
