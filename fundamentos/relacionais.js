console.log(2 ==3)
console.log('1'== 1)
console.log('1' === 1) // estritamente iguais

const d1 = new Date(0)
const d2 = new Date(0)
console.log(d1 == d2)
console.log(d1 === d2)
console.log(d1.getTime == d2.getTime)

/*********************************************** Ternario **********************************/
console.log()
const resultado = nota =>  nota >= 7 ? 'Aprovado': 'Reprovado'
console.log(resultado(0.9))
console.log(resultado(7.5))
