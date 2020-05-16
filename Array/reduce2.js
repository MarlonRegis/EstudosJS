Array.prototype.reduce2 = function(callback, valorinicial) {
    let indiceInicial = valorinicial ? 0 : 1
    let resultado = this[0] || valorinicial
    for (let i = 0; i < this.length; i++) {
        resultado = callback(resultado, this[i], i, this)
    }
    return resultado
}



const aluno = [
    { nome: 'Jose', nota: 9.5, bolsa: true },
    { nome: 'Maria', nota: 7.5, bolsa: true },
    { nome: 'Amalia', nota: 9, bolsa: false },
    { nome: 'Ana', nota: 7, bolsa: false }
]

const todosBolsista = function(acumulador, atual) {
    return acumulador = acumulador && atual

}
const algumBolsista = function(acumulador, atual) {
    return acumulador = acumulador || atual

}

const resultado = aluno.map(a => a.bolsa).reduce2(todosBolsista)
const resultado2 = aluno.map(a => a.bolsa).reduce2(algumBolsista)

console.log(resultado, resultado2)