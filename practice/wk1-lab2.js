//Write a javascript program to determine if a number is odd or even. 
function isOddOrEven(number){
    return number % 2 === 0 ? 'even' : 'odd';

}

const inputNumber = parseInt(process.argv[2]);

if (isNaN(inputNumber)) {
    console.log("Please provide a valid number.");
} else {
    const result = isOddOrEven(inputNumber);
    console.log(`The number ${inputNumber} is ${result}`);
}