//tagged templates - processa o template dentro de uma funcao
function tag(partes, ...valores) {
    console.log(partes);
    console.log(valores);
    return 'Outra string';
}

const aluno = 'Guilherme'
const situacao = 'Aprovado'

console.log(tag `${aluno} está ${situacao}.`)

// EXEMPLO 2

function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

const preco = 29.29
const precoParc = 11;
console.log(real `1x de ${preco} ou 3x de ${precoParc}`)