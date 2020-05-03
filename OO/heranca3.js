const pai = { nome: 'pedro', corCabelo: 'preto' }

const filho1 = Object.create(pai)
filho1.nome = 'Ana'
console.log(filho1.corCabelo)

const filho2 = Object.create(pai, {
    nome: { value: 'Bia', enumerable: true, writable: false }
})

console.log(filho2.nome)
filho2.nome = 'Carla'
console.log(`${filho2.nome} tem cabelo ${filho2.corCabelo}`)

console.log(Object.keys(filho1))
console.log(Object.keys(filho2))

for (let key in filho2) {
    filho2.hasOwnProperty(key) ?
        // metodo retorna booleando indicando se o obj possui essa propriedade ou foi herdada(caso false)
        console.log(key) : console.log(`Por herança: ${key}`)
}