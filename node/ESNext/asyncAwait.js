const http = require('http')

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

//Recurso ES8
//Objetivo de simplificar o uso de promises...

let obterAlunos = async() => {
        const ta = await getTurmaP('A')
        const tb = await getTurmaP('B')
        const tc = await getTurmaP('C')
        return [].concat(ta, tb, tc)
    } //retorna um objeto do tipo asyncfunction

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nome => console.log(nome))