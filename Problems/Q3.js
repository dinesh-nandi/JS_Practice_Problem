//Write a function that calculates and prints the area of a rectangle given its lenght and width

function rect(l , b){
    if(l <=0 || b<=0){
        console.log("Area cannot be negative")
        return;
    }
    console.log("The area of the rectangle is : " + l * b);
}
rect(3 ,5);
rect(12, 98);

// Alternative method
function rectangle(length , width){
    if (length <=0){
        throw new RangeError("Length  should be  a positive number");
    }
    if(width <= 0){
        throw new RangeError("Width should be a positive number");
    }
    const areaOfRectangle = length* width;
    console.log("The area of the rectangle is : " + areaOfRectangle)
}
rectangle(9 , 60);
rectangle(5 , 2);
