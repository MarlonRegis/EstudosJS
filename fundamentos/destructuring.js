const pessoa ={
    nome: 'Ana',
    idade : 5,
    endereco: {
        logradouro : 'Rua Joana Darc',
        numero : 1000
    }
}

console.log(pessoa)
const {nome , idade } = pessoa
console.log(nome, idade)

const {endereco: {logradouro,numero,cep}} = pessoa
console.log(numero, cep)
//console.log(endereco.numero) o destructuring criara nao endereco mas sim logradouro e numero