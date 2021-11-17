function armstrong(input) {
    let result = 0;

    numbers = input.toString().split("")
    for (i of numbers) {
        result += Math.pow(i, 3);
    }

    if (input == result)
        return true
    else
        return false
}

console.log(armstrong(153))
console.log(armstrong(18))

