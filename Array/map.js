const nums = [1, 2, 3, 4, 5]

const soma10 = e => { return e + 10 }
const dinheiro = e => { return (`R$ ${parseFloat(e).toFixed(2).replace('.',',')}`) }

const result = nums.map(soma10).map(dinheiro)
console.log(result)

const carrinho = [
    '{"nome": "borracha", "preco":3.45}',
    '{"nome": "caderno", "preco":13.90}',
    '{"nome": "kit de lapis", "preco":41.22}',
    '{"nome": "caneta", "preco":7.50}'
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)