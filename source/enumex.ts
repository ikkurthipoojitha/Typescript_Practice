enum Direction {  
    Up,  
    Down,  
    Left,  
    Right,  
}  
console.log(Direction);  

enum Direction1 {  
    Up=1,  
    Down=3,  
    Left=6,  
    Right=10,  
}  
console.log(Direction1);  

enum AppStatus {  
    ACTIVE,  
    INACTIVE,  
    ONHOLD  
}   
function checkStatus(status: AppStatus): void {  
    console.log(status);  
}  
checkStatus(AppStatus.ONHOLD);  
enum AppStatus2 {  
    ACTIVE = 'ACT',  
    INACTIVE = 'INACT',  
    ONHOLD = 'HLD',  
    ONSTOP = 'STOP'  
}  
function checkStatus2(status: AppStatus2): void {  
   
    console.log(status);  
}  
checkStatus2(AppStatus2.ONSTOP);  

enum AppStatus3 {  
    ACTIVE = 'Yes',  
    INACTIVE = 1,  
    ONHOLD = 2,  
    ONSTOP = 'STOP'  
}  
console.log(AppStatus3.ACTIVE);  
console.log(AppStatus3.ONHOLD);  



enum Weekend {  
    Friday = 1,  
    Saturday = getDate('Dominoz'),  
    Sunday = Saturday * 40  
  }  
    
  function getDate(day : string): number {  
      if (day === 'Dominoz') {  
          return 3;  
      }  
  }  
  console.log(Weekend.Saturday);   
  console.log(Weekend.Sunday);  