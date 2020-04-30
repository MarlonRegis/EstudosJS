function aPagar(cod, quant) {
    let total = 0;

    switch (cod) {
        case (100):
            total = quant * 3
            break
        case (200):
            total = quant * 4
            break
        case (300):
            total = quant * 5.50
            break
        case (400):
            total = quant * 7.50
            break
        case (500):
            total = quant * 3.50
            break
        case (600):
            total = quant * 2.80
            break
        default:
            console.log("Produto não cadastrado!")
    }
    if (total != 0) {
        console.log("O valor total do produto escolhido foi de: ", total)
    }
}

aPagar(700, 5)