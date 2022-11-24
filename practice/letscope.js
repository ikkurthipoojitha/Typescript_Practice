function f(input) {
    var x = 100;
    if (input) {
        // "x" exists here        
        var y = x + 1;
        return y;
    }
    // Error: "y" doesn't exist here  
    // return y;  
}
f(true);
