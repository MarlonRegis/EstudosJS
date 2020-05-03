const produto = Object.preventExtensions({
        nome: 'Qualquer',
        preco: 3.5,
        tag: 'promocao'
    })
    // o prevent ele nao permite adicionar atributos 
console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Teste'
delete produto.tag
console.log(produto)

//object.seal nao adicionar nem excluir atributos mas consegue alterar os atributos
Object.seal(produto)
console.log(Object.isSealed(produto))

//obj.freeze = selado + valores constantes

Object.freeze(produto)
console.log(Object.isFrozen(produto))