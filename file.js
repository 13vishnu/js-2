const side1= 5;
const side2=6;
const side3=7;
const p=(side1+side2+side3)/2
const area=(p*(p-side1)*(p-side2)*(p-side3));
console.log("Area of the Traingle:")
console.log("The area of the Traingle is:",+area)

function sumtriple(a,b){
if(a==b){
    return 3*(a+b);

}else{
    return (a+b);
}
}
console.log(sumtriple(10,20));
console.log(sumtriple(10,10));

let filename=prompt("Enter file name:");
let t = filename.indexOf(".");
let fileextension = filename.slice(t+1);
console.log("The file name is:",fileextension); 