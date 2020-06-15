const http = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');
let funcionarios;
let result = null;

const chineses = f => f.pais === 'China';
const mulheres = f => f.genero === 'F';
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual;
}

axios.get(http).then(resposta => {
    this.funcionarios = resposta.data;

    this.result = this.funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario);

    console.log(this.result);
})