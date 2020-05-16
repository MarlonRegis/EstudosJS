const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad', preco: 5000, fragil: true },
    { nome: 'Copo', preco: 5, fragil: true },
    { nome: 'Copo Plastico', preco: 10, fragil: false }
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))