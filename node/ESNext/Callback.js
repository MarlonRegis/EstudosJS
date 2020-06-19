// callback sem promise
const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
    http.get(url, res => {
        let resultado = ''
        res.on('data', dados => {
            resultado += dados
        })

        res.on('end', () => {
            callback(JSON.parse(resultado))
        })
    })
}

let nome = []

getTurma('A', alunos => {
    nome = nome.concat(alunos.map(a => `A :${a.nome}`))
    console.log(nome)
    getTurma('B', alunos => {
        nome = nome.concat(alunos.map(a => `B : ${a.nome}`))
        console.log(nome)
        getTurma('C', alunos => {
            nome = nome.concat(alunos.map(a => `C : ${a.nome}`))
            console.log(nome)
        })
    })
})

//Refatorando para promise

const getTurmaP = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
            res.on('data', dados => {
                resultado += dados
            })

            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (e) {
                    reject(e)
                }
            })
        })
    })
}

getTurmaP('A').then(alunos => {
    nome = nome.concat(alunos.map(a => `A :${a.nome}`))
    console.log(nome)
    getTurmaP('B').then(alunos => {
        nome = nome.concat(alunos.map(a => `B : ${a.nome}`))
        console.log(nome)
        getTurmaP('C').then(alunos => {
            nome = nome.concat(alunos.map(a => `C : ${a.nome}`))
            console.log(nome)
        })
    })
})

Promise.all([getTurmaP('A'), getTurmaP('B'), getTurmaP('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(x => console.log(x))
    .catch(e => console.log(e.message))