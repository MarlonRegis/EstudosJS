//operador ... rest(juntar)/spread (espalhar)
// usar rest como parametros de funcoes

//usar o rest com objeto
const funcionario = { nome: 'Maria', salario: 12345.15 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

//usar o spread em array
const grupoA = ['jose', 'jo', 'joao']
const grupoFinal = ['maria', 'alba', ...grupoA, 'rafaela']
console.log(grupoFinal)