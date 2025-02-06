check_sqr = (num) => {
    const root = Math.sqrt(num);
    return root === Math.floor(root)
}

const numbers = [3, 4, 9, 11, 15, 16, 25, 30];
console.log("original number set: ", numbers);

let first_perfect_sqr = -1;
for (let i = 0; i < numbers.length; 1++){
    if (check_sqr(numbers[i])) {
        first_perfect_sqr = i;
        break;
    }
}

console.log("index and number of first perfect square: ". first_perfect_sqr, " ", numbers[first_perfect_sqr]);

const perfect_sqr = [];
for (let i = 0; i < numbers.length; i++) {
    if (check_sqr(numbers[i])){
        perfect_sqr.push(numbers[i]);
    }
}

console.log("perfect sqaure set: ", perfect_sqr);

//arrays v

// const first_perfect_sqrt = numbers.findIndex(check_sqr);
// console.log("index and number of first perfect square:",  first_perfect_sqr, " ", numbers[first_perfect_sqrt])

// const perfect_sqr = numbers.filter(check_sqr);
// 
