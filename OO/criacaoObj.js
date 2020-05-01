//usando notacao literal 
const obj1 = {}
console.log(obj1)

//Objetos do JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funcoes Construtoras no ES2015
class Produto {
    constructor(nome, preco, desc) {
        this.nome = nome
        this.getPrecocomDesc = () => {
            return preco * (1 - desc)
        }
    }
}

//Funcoes contrutoras antes
function Produto2(nome, preco, desc) {
    this.nome = nome
    this.getPrecocomDesc = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('jose', 1000, .20)
console.log(p1.getPrecocomDesc())

//Funcao Factory 
function CriarFuncionario(nome, salarioBase, horafaltas, quanthoras) {
    return {
        nome,
        salarioBase,
        quanthoras,
        getDesconto() {
            let desconto
            desconto = salarioBase / quanthoras * horafaltas
            return desconto
        },
        getSalario() {
            let salariofinal
            if ((quanthoras / 30) >= horafaltas) {
                salariofinal = salarioBase - (2 * this.getDesconto())
                    //neste caso é dobrado o valor tendo em vista o calculo do DSR
            } else {
                salariofinal = salarioBase - this.getDesconto()
            }
            return salariofinal
        }
    }
}

const f1 = new CriarFuncionario('Jose', 1100, 6, 180)
console.log(f1.getSalario())
Object.freeze(f1) //congela as atribuições, impedindo qualquer alteração no OBJ

/*Comandos que não serão possivel fazer apos o congelamento

delete f1.nome
f1.nome = 'Maria'
*/

console.log(f1)