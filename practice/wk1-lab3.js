//Given a string of any length, write a javascript program to output the number of characters of that string. 

function countCharacters(str){
    return str.length;
}

const inputString = process.argv[2];

if (inputString) {
    const characterCount = countCharacters(inputString);
    console.log(`The number of characters in "${inputString}" is ${characterCount}.`);
} else {
    console.log("Please provide a string as an input");

}