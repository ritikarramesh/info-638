function factorial(input) {
    const number = parseInt(input); //the input will have to be an integer
    
    if (isNaN(number) || number < 0) { // if the number is not a number(isNan) or the number is less than 0, it will print "Please provide a non-negative integer."
        console.log("Please provide a non-negative integer.");
    }
    else if (number === 0) { //otherwise, if the number provided is 0, it will print "The facorial of 0 is 1."
        console.log('The factorial of ' + number + ' is 1.'); 
    }
    else { //and if the number is 1 or more, it will go through this for loop and do the math provided (my process in comments below) and will print out 'The factorial of 5 is 120.'
        let result = 1;
        for (let i = 2; i <= number; i=i+1) { //ex: number = 5 ----> 1. i=2; 2. 2 <= 5; 3. 1 = 1 * 2 -> 2; 3. 2 = 2 + 1 -> (3)
            result = result * i;
            // result = 1 * 2 = 2
            // result = 2 * 3 = 6
            // result = 6 * 4 = 24
            // result = 24 * 5 = 120
        }
        console.log('The factorial of '  + number + ' is ' + result + '.');
    }
}

factorial(process.argv[2]);


