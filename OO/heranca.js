String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

console.log('Marlon'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

//teste
console.log('Marlon'.reverse().split('').first())