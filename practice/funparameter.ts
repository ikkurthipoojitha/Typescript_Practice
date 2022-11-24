function showDetails(id:number,name:string,e_mail_id?:string) {   
    console.log("ID:", id, " Name:",name);   
    if(e_mail_id!=undefined)    
    console.log("Email-Id:",e_mail_id);   
 }  
 showDetails(101,"Virat Kohli");  
 showDetails(105,"Sachin","sachin@javatpoint.com");  

 function displayName(name: string, greeting: string = "Hello") : string {  
    return greeting + ' ' + name + '!';  
}  
console.log(displayName('JavaTpoint'));   //Returns "Hello JavaTpoint!"  
console.log(displayName('JavaTpoint', 'Hi'));   //Returns "Hi JavaTpoint!".  
console.log(displayName('Sachin'));    //Returns "Hello Sachin!"  

function sum(a: number, ...b: number[]): number {  
    let result = a;  
    for (var i = 0; i < b.length; i++) {  
    result += b[i];  
    }  
    return result;  
  }  
  let result1 = sum(3, 5);  
  let result2 = sum(3, 5, 7, 9);  
  console.log(result1 +"\n" + result2);  