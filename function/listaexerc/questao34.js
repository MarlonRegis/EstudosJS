function comparar(prim, segun) {
    if (prim.toUpperCase() == segun.toUpperCase()) {
        return true
    } else {
        return false
    }

}

console.log(comparar("teste", "testE"))

//Comparando string se esta contida

function verificarString(string1, string2) {
    let estaContido = true
    for (let i = 0; i < string1.length; i++) {
        let caracterestring1 = string1.charAt(i).toLowerCase()
        for (let j = 0; j < string2.length; j++) {
            let caracterestring2 = string2.charAt(j).toLowerCase()
            if (caracterestring1 == caracterestring2) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        if (!estaContido) {
            return estaContido
        }
    }
    return estaContido
}

console.log(verificarString('abc', 'teste'))