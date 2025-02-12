// map example
times10 = (num) => {
    return num * 10;
}

const numbers = [4, 9, 16, 25];

//create new arrays using .map
const sqrt_numbers = numbers.map(Math.sqrt);
const newArr = sqrt_numbers.map(times10);

console.log(numbers);
console.log(sqrt_numbers);
console.log(newArr);