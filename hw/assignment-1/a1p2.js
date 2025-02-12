function findVowels(input){
    if (typeof(input) !== "string"){ //if the type of input is not a string, then print "Please provide a string as input."
        console.log('Please provide a string as input.');
    } else { 
        let vowelCounter = 0; // the vowelCounter is outside of the for loop so it does not 0 out every time it goes through the loop
        for (const letter of input){ 
            if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){ //the if condition has all 5 vowels with the 
                vowelCounter = vowelCounter + 1; //for example if you input the word 'hello', the counter (in this case vowelCounter) will add 1 when it loops through the if condition
            } 
        }
        console.log('The number of vowels in ' + input + ' is ' + vowelCounter + '.');  //if there are any vowels (goes through the if conditions and finds (letter === (vowel letter))), then it will print "The number of vowels in hello is 2."
    }
}

findVowels(process.argv[2]);