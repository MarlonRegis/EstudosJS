const pilotos = ['jose', 'roberto', 'paulo', 'silas']

pilotos.pop() //elimina o ultimo 
pilotos.shift() //elimina o primeiro
pilotos.push('gilson') //insere no ultimo item
console.log(pilotos)
pilotos.unshift('Aldo')
console.log(pilotos)

pilotos.splice(2, 0, 'Bruce', 'Wayne') //adicionando
pilotos.splice(3, 1) //removendo
console.log(pilotos)

const algunspilotos = pilotos.slice(1, 4) //gerando um novo array escolhendo a partir do indice 1 ate o 3 contido
console.log(algunspilotos)