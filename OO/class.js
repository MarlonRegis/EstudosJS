class Lancamento {
    constructor(nome = 'Generico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
            this.mes = mes
            this.ano = ano
            this.lancamentos = []
        }
        // os 3 pontos juntas todos os lancamentos em um array 
    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
            let valorConsolidado = 0
            this.lancamentos.forEach(l => {
                valorConsolidado += l.valor
            })
            return valorConsolidado
        }
        // foreach executa uma funcao em casa dado do array
}

const salario = new Lancamento('salario', 6000)
const contaCelpe = new Lancamento('EnergiaEletrica', -300)

const teste = new CicloFinanceiro(03, 2020)
teste.addLancamentos(salario, contaCelpe)
console.log(teste.sumario())