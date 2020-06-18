for (let letra of 'Cod3r') {
    console.log(letra)
}

const assuntosEcma = ['map', 'set', 'promise']

for (let i in assuntosEcma) {
    console.log(i)
    console.log(assuntosEcma[i])
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }],
])

for (let assuntos of assuntosMap) {
    console.log(assuntos)
}

for (let keys of assuntosMap.keys()) {
    console.log(keys)
}

for (let value of assuntosMap.values()) {
    console.log(value)
    console.log(value.abordado)
}

for (let [ch, vl] of assuntosMap.entries()) {
    console.log(vl, ch)
}

const letras = new Set(['a', 'b', 'c'])
for (let a of letras) {
    console.log(a)
}