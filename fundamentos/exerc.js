var numero1 = 2
let numero2 = 5
let numero3 = 6
let numero4 = 10
let result1 = Math.pow(numero1,2)
console.log("O quadrado de "+numero1+" é " +result1)
var numero= [5,6,4,3,2]
var i = 0

    while(i<=5){
        numero[i] = 100 - (Math.pow(2,i))
        i++
    }
    console.log(numero)