// Exemple 1

function soma(){
    let soma = 0 
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}
console.log(soma(5,4,9))

// Exemple 2

function somamaiorq20(a, b){
    const somamaior = a + b
    if(somamaior > 20){
        console.log(`O valor atingiu o teto disponível ${somamaior}`)
    }else{
        return somamaior
    }
}

console.log(somamaiorq20(10,5))
console.log(somamaiorq20(10 ,11))

// Exemple 3 Parametros padroes

function soma(a , b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b+ c 
}

console.log(soma())

// Exemple 4 Parametros padroes 2

function soma(a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c)? 1 : c
    return a + b + c
}

// Exemple 5 valor padrao do es2015 !!!!mais ultilizado!!!!
function soma2(a = 1, b= 1, c= 1){
    return a + b + c
}