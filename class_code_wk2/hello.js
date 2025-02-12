// console.log(typeof(parseFloat(process.argv[2])));

function hello(a = parseInt(process.argv[2])){
    const b = 2+a;
    console.log(b);
}

hello();
