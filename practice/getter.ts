class MyDrawing {    
    length: number = 20;    
    breadth: number = 15;    
   
    get rectangle() {    
        return this.length * this.breadth;    
    }    
}    
console.log(new MyDrawing().rectangle);  