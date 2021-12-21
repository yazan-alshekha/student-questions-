function convertToArray(x){
    let newArray= x.split('');
    return newArray
}

//another solution

function convertToArray2(x){
    let newArray= [];
    for (let i =0 ; i < x.length ; i++){
        newArray.push(x[i])
    }
    return newArray
}


console.log(convertToArray("hello"));