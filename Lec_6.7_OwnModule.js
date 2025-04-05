const sum = (a,b)=>{
    return a+b
}

const sub = (a,b)=>{
    return a-b
}

const mul = (a,b)=>{
    return a*b
}

const div = (a,b)=>{
    return a/b
}

const rev = (n)=>{
    n1 = n*n
    n1 = n1.toString().split('').reverse().join('')
    n1 = parseInt(n1)
    console.log(n1)
    
    n2 = n*n
    n2 = n2.toString().split('').reverse().join('')
    n2=parseInt(n2)
    console.log(n2)

    if(n1==n2){
        console.log('Equal')
    }
    else{
        console.log('Not Equal')
    }
    
}

rev(21)


// module.exports.s = sum
// module.exports.m = mul

// exports.mul1 = (a,b)=>{  // also export like this is ES6
//     return a*b
// }


module.exports = {sum,sub,mul,div}
