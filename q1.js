function change(input) {
    // check if the input empty or not 
    if (input == "") {
        return ""
    }
    // change only the first letter of the input to upper case 
    let newString = "";
    newString = newString + input[0].toUpperCase()
    
    // change the rest of the input massage 
    for (let i = 1; i < input.length; i++) {

        if (input[i - 1] == " ") {
            newString = newString + input[i].toUpperCase()
        }
        else {
            newString = newString + input[i]
        }
    }
    return (newString)
}

console.log(change("Hello world "));

