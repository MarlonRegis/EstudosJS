let valor //nao inicializada, logo e do tipo indefined
console.log(valor)

valor = null //nao aponta para nenhuma memoria
console.log(valor)
// logo termo como toString() nao irá funcionar

const produto ={}
console.log(produto.preco)
/* console.log(produto.preco.toString()) = erro!!
*/
produto.preco = undefined //nao indicado essa pratica utilizar ou 0 ou null
delete produto.preco
console.log(produto)
