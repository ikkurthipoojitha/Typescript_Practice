let a = 3;  
let b = 2;  
  
switch (a+b){  
    case 1: {  
        console.log("a+b is 1.");  
        break;  
    }  
    case 2: {  
        console.log("a+b is 5.");  
        break;  
    }  
    case 3: {  
        console.log("a+b is 6.");  
        break;  
    }  
      
    default: {  
        console.log("a+b is 5.");  
        break;  
    }  
}  
let grade: string = "A";  
switch (grade)  
{   
    case'A+':  
      console.log("Marks >= 90"+"\n"+"Excellent");  
      break;  
  
    case'A':  
      console.log("Marks [ >= 80 and <90 ]"+"\n"+"Good");  
      break;  
  
    case'B+':  
      console.log("Marks [ >= 70 and <80 ]"+"\n"+"Above Average");  
      break;  
  
    case'B':  
      console.log("Marks [ >= 60 and <70 ]"+"\n"+"Average");  
      break;  
  
    case'C':  
      console.log("Marks < 60"+"\n"+"Below Average");  
      break;  
  
    default:  
        console.log("Invalid Grade.");  
}  
