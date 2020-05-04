Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}


const teste = ['a', 'b', 'c', 'd']

teste.forEach2(function(nome, index) {
    console.log(`${index + 1}) ${nome}`)
})

const nums = [1, 2, 3, 4, 5]

let resultado = nums.map(e => {
    return e * 10
})

console.log(resultado)