console.log(typeof Array, typeof new Array, typeof [])
let aprovados = new Array('joao', 'marlon', 'felipe')
console.log(aprovados)

aprovados = ['bia', 'milena', 'leticia']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Daniele')

console.log(aprovados)

console.log(aprovados.length)
aprovados[8] = 'Vanessa'

console.log(aprovados)
aprovados.pop()
console.log(aprovados.length)
for (x in aprovados) {
    aprovados.splice(aprovados.indexOf(undefined, 1))
}
aprovados.sort()
console.log(aprovados)

aprovados.splice(1, 0, 'Joana', 'Paulo')
console.log(aprovados)