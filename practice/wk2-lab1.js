//Write a string palindrome checker. A string can be handled as an array:

function isPalindrome(str){ //replace anything that us not a letter or number with an emptry string and then lowercase the string
    cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    console.log('original string (lowercased and w/o spaces) ', cleanedStr);


    //split the string into an array, reverse the array, and then join the array elements back into a string
    const reversed = cleanedStr.split('').reverse().join('');
    console.log('reversed string: ', reversed);

    //return true is reversed value and data type is the same
    return cleanedStr === reversed;
}

const inputString = process.argv[2];

if(inputString) {
    console.log(`"${inputString}" a palindrome? `, isPalindrome(inputString));
} else {
    console.log("Try again")
}