document.addEventListener('DOMContentLoaded', () => {
    
    let heading = document.getElementById("heading");

    if (heading) { 
        
        heading.addEventListener("click", () => {
            heading.innerHTML = "ell oworld";
        });
    } else {
        console.error("Element with ID 'heading' not found");
    }
});



//  find max and min number using typescript




const handleNumber =  (arr:number[]) => {
    let min = arr[0];
    let max = arr[0];
    for(let i = 0;i<arr.length;i++){
        if(arr[i] > max){
            max = arr[i];
        }
         if (arr[i] < min) {
             min = arr[i];
         }
    }
    return [min,max];
}
let arr = [55,44,32,56]
let result = handleNumber(arr)
console.log(result)



//Write a JavaScript program to list the properties of a JavaScript object.

interface PersonType {
    name:string,
    age:number
}

let obj:PersonType = {
    name:"arun prasath",
    age:21
}

console.log(obj)





//generics

function gfg<T>(res: T): T {
    return res;
}

let result1: string = gfg<string>("GEEKSFORGEEKS");
let result2: number = gfg<number>(740);
let result3: boolean = gfg<boolean>(false);

console.log(result1);
console.log(result2);
console.log(result3);






// Generics


function displayUsername<T,U>(username:T,age:U):void{
  console.log("Hello " + username + " and my age is " + age )
}



displayUsername<string,number>("arunprasath",21)