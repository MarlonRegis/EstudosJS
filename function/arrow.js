let dobro = function (a){
    return 2 * a 
}
 
dobro = (a) => {
    return 2*a
}

dobro = a => 2*a
console.log(dobro(2))
console.log(dobro(Math.PI))

let ola = function(){
    return 'Olá!' 
}
//############ Em arrow##################
ola = () => 'oLÁ'
//or
ola = _ => 'Olá'

console.log(ola())