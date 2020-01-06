function getInteiroAleatorio (min, max){
    if(min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let i = 0
let a = 0

/*  
_________________Exemplo 1___________________________

while(i != -1){
    i = getInteiroAleatorio(-1, 10)
    console.log(`O numero escolhido foi ${i}`)
    a++
    if(a >= 5) {
        console.log("Atingido o numero maximo")
        break
    } 
}

_________________EXEMPLO 2__________________________

do {
    i = getInteiroAleatorio(-1, 10)
    console.log(`O numero escolhido foi ${i}`)
    a++
    if(a >= 5) {
        console.log("Atingido o numero maximo")
        break
    } 
}while(i != -1)

_________________EXEMPLO 3__________________________

 const nota = [7.5, 7 , 5.4]
for(i = 0;i< nota.length; i++){
    console.log(`nota foi = ${nota[i]}`)
}

_________________EXEMPLO 4__________________________

const nota = [7.5, 7 , 5.4]
for(let i in nota){
    console.log(i, nota[i])
}
const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: '25',
    peso : '60',
    endereco: {
        rua: 'oscar freire',
        numero: 35,
        bairro: 'juscelino'
    }
}

for(let i in pessoa){
    console.log(`${i} = ${pessoa[i]}`)
} */


 console.log("Processo finalizado!")