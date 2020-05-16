const aluno = [
    { nome: 'Jose', nota: 9.5, bolsa: true },
    { nome: 'Maria', nota: 7.5, bolsa: true },
    { nome: 'Amalia', nota: 9, bolsa: false },
    { nome: 'Ana', nota: 7, bolsa: false }
]

console.log(aluno.map(a => a.nota))

const resultado = aluno.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})


console.log(resultado / (aluno.map(a => a.nota).length))