//armazenando funcao em variavel ou const
const imprimirSoma = function (a,b){
    console.log(a + b)
}

imprimirSoma(2,3)

//arrow fuction

const soma = (b,c) => {
    return b + c
}
console.log(soma(3,5))

//retorno implicito
const subtracao = (a, b) => a-b
//sem chaves logo apenas 1 linha de codigo


console.log(subtracao(2,4))
