//Write a function that calculate factorial of a giiven number


//Method 1  
function fact(num){
    let product = 1;
    for(let i=1; i<=num; i++){
        product *=i;
    }
    console.log("The factorial is : " + product);
}
fact(6);

//Method 2
function factorial(n){
    if(n===0){
        return 1;
    }
    return n*factorial(n-1);
}
console.log(factorial(5));