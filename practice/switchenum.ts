enum Direction {  
    East,  
    West,  
    North,  
    South      
};  
var dir: Direction = Direction.North;  
  
function getDirection() {  
    switch (dir) {  
        case Direction.North: console.log('You are in North Direction');  
            break;  
        case Direction.East: console.log('You are in East Direction');  
            break;  
        case Direction.South: console.log('You are in South Direction');  
            break;  
        case Direction.West: console.log('You are in West Direction');  
            break;  
    }  
}  
getDirection();  

let number = 20;    
switch(number)  
{    
    //switch cases without break statements    
    case 10: console.log("10");    
    case 20: console.log("20");    
    case 30: console.log("30");    
    default: console.log("Not in 10, 20 or 30");  
}  
