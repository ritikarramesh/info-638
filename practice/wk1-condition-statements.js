const now = new Date();
const hours = now.getHours();

console.log (`hours = `, hours);
if (hours < 13)
    console.log(`good day`);
else if (hours < 18)
    console.log(`good afternoon`);
else
    console.log(`good evening`);