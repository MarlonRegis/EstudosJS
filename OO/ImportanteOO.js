const pessoa = {
    nome: "Josefa",
    idade: 45,
    peso: 75
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

//vale ressaltar que o Objeto em Javascript nada mais é que uma coleção dinamica de chaves e valores

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave} e ${valor}`)
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // define se sera listada 
    writable: false, // permite modificacao na variavel
    value: '07/02/1999' //definicao do proprio valor
})

pessoa.dataNascimento = 01 / 01 / 2017
console.log(pessoa.dataNascimento)

//Object.assign (ECMAScript 2015 - ES6)

const dest = { a: 4 }
const o1 = { b: 2 }
const o3 = { c: 3 }
const obj = Object.assign(dest, o1, o3)
console.log(dest)
console.log(obj)

//Object.freeze(obj)

obj.c = 1234
    //obj.d = 4
console.log(obj)
Object.defineProperty(obj, 'd', { enumerable: false, value: 4 })
console.log(obj)