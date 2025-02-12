//Write a program to calculate the area of a circle, given the radius. Area should be rounded to 2 decimal places.
//Area = Pi * radius2

const radius = parseFloat(process.argv[2]);
const pi = 3.14;

function calculateArea(radius){
    let area = (pi*(radius**2)).toFixed(2);
    return area;
}

if (!isNaN(radius) && radius > 0) {
    console.log (`Area of a circle with a radius of ${radius}:`, calculateArea(radius));
} else {
    console.log("Try again")
}
