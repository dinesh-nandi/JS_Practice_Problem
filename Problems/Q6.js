//Write a function  that returns the reverse of a String

//Method 1
function str(input){

    if(typeof input !== 'string'){
        throw new Error("Invalid input!! Please enter String");
    }

     let reverse = "";
      for(let i = input.length-1; i>=0;  i-- ){
     reverse += input[i];
     }
     console.log(reverse);
}

str("Dinesh Nandi");

//Method 2
function reverseString(inputString){
    const splittedInput = inputString.split('');
    const reversedArray = splittedInput.reverse();
    const result = reversedArray.join('');
    console.log(result);
}
reverseString("Meow cat");