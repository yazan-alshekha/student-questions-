function getRemainder(num, divisor)
{
    let t = (num - divisor * parseInt(num / divisor));
    console.log( num - divisor );
    console.log( parseInt(num / divisor) );
    return t;
}


console.log( getRemainder(10,5) );
console.log( getRemainder(8,6) );
console.log( getRemainder(2,4) );