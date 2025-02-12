// filter and findIndex examples
check_sqr = (num) => {
    const root = Math.sqrt(num);
    return root === Math.floor(root)
}

const numbers = [3, 4, 9, 11, 15, 16, 25, 30];
console.log("original number set: ", numbers);

// find the first index of the number with perfect square
const first_perfect_sqr = numbers.findIndex(check_sqr);
console.log("index and number of first perfect square:", first_perfect_sqr, " ", numbers[first_perfect_sqr]);

//create a new array using filter 
const perfect_sqr = numbers.filter(check_sqr);
console.log("perfect square sets: ", perfect_sqr)
