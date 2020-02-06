const fabricante = ['Mercedes', 'Audi', 'BMW']
var indice = 0

function imprimir (nome, indice){
    console.log(`${indice +1}. ${nome}` )
}

fabricante.forEach(imprimir)
fabricante.forEach(fabricante =>console.log(fabricante))
const numeros = [1,2,3,4,5,6,7,8]
numeros.forEach(imprimir)
//################# realizando callback manualmente

const notas = [7.5,7.6,7.7, 2, 3 , 5]

let notasbaixas = []
for (let i in notas ){
    if(notas[i] < 7){
        notasbaixas.push(notas[i])
    }
}
console.log(notasbaixas)

//####### Mesmo exemplo com callback##############

notasbaixas = notas.filter(function(){
    return notas < 5
})
console.log(notasbaixas)

