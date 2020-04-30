soma = 0.1 + 0.2

function arredondar(valor) {
    let result = valor.toFixed(2)
    console.log(`R$ ${result.replace(".",",")}`)
}

arredondar(soma)