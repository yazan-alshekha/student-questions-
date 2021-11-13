function palidrome(input) {
    if (input == "") return "Empty input";

    let reverseindex = input.length - 1;

    for (let i = 0; i < input.length; i++) {

        if (input[i] != input[reverseindex]) {
            return false;
        }
        reverseindex --;
    }
    return true;
}


console.log(palidrome("madam"));
console.log(palidrome("aa"));
console.log(palidrome("kkaa"));