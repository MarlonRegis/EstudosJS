function rand([ min = 0,max = 1000]){ // caso 1 ({min = 0 , max = 1000})
    if ( min > max) [min,max] = [max, min]
    const valor = Math.random() * (max - min ) + min
    return Math.floor(valor)
}

/*
caso 1

const obj = {max: 50, min: 40}
console.log(rand(obj))
console.log(rand({min: 995}))
console.log(rand({}))
*/
console.log('teste' + rand([50,40]))
