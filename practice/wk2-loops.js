//loops example now with the same as forEach example
function factorial(num) {
    // Start with 1
    let answer = 1;
    
    // Multiply the numbers one by one
    for (let i = 1; i <= num; i++) {
        answer = answer * i;
    }
    
    // Show the result
    return answer;
}
