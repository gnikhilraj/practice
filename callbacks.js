//Callbacks

// I need to find the sum of squares of two different numbers

function square(n){
    return n * n;
}

function cube(n){
    return n * n * n;
}

function sumOf(a,b , fn){
    return fn(a) + fn(b);
}

console.log("Sum of squares");
console.log(sumOf(2,3,square));


console.log("Sum of cubes");
console.log(sumOf(2,3,cube));
