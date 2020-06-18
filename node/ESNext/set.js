//nao aceita repetição e não é indexada
const times = new Set();

times.add('Vasco')
times.add('Flamento').add('Palmeiras').add('Corinthians')
times.add('Sport')
times.add('sport')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
console.log(times.has('vasco'))
times.delete('sport')
console.log(times.has('sport'))

const nome = ['roberto', 'severina', 'severina', 'quiteria'];
const nomeSet = new Set(nome);

console.log(nome)
console.log(nomeSet)