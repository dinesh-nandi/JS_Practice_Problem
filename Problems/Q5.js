//Write a program that finds and prints the smallest number among three given numbers.

//Method 1
let num1 = 100;
let num2 = 200 ;  
let num3 = 400;

if(num1==num2&& num2==num3){
    console.log("All the numbers are same");
}
if(num1 <= num2 && num1 <=num3){
    console.log("num1 is the smallest number");
}else if(num2 <= num1 && num2 <= num3){
    console.log("num2 is smallest number");
}else{
    console.log("num3 is smallest number");
}

//Method 2
let small = Math.min(10 , -10 ,10);
console.log("The smallest number is " , small);