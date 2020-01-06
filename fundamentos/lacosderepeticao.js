for (var i = 0; i<=10 ; i++){
    console.log(i)
}
console.log('valor no final do laço',i)

console.log('usando let ao inves de var')

//por o tipo let ser variavel tbm em bloco nao consegue identificar fora dele

for (let a = 0; a<=10 ; a++){
    console.log(a)
}
//console.log('valor no final do laço',a)


//meio que o get em encapsulamento
const funcs = []

for (let i =0;i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}
funcs[2]()
funcs[5]()

//HOISTING 
console.log( a ) //esta indefinido entretanto declarado
var a = 0
console.log (a)// adquiriu o novo valor

//hoisting em javascript e um comportamento padra de mover a declaracao de variaveis para o topo

