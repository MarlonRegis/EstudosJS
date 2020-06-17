import { writeFile } from 'fs'
const produto = {
    nome: 'Celular',
    preco: 1515.99,
    desconto: 0.15
}
writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo Salvo')
})