//Write a javascript program to calculate the area of a square, given one side of a square. 

const side = parseFloat(process.argv[2]);

function calculateArea(side) {
    let area = side**2;
    return area;

}

if (!isNaN(side) && side > 0){
    console.log(`area of a square with a side of ${side}:`, calculateArea(side));

} else{
    console.log("Please provide a valid, positive value for one side of the square.");
}
