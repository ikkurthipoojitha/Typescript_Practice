type Pet = 'cat' | 'dog' | 'Rabbit';  
let pet: Pet;  
if(pet = 'cat'){  
    console.log("Correct");  
};  

type FruitsName = "Apple" | "Mango" | "Orange";  
function showFruitName(fruitsName: FruitsName): void {  
    console.log(fruitsName);  
}  
showFruitName('Mango');   //OK - Print 'Mango'  
//Compile Time Error  
// showFruitName('Banana');  