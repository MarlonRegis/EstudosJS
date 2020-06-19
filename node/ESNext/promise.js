function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que maneiro carinha ').then(frase => frase.concat('?!?')).then(outrafrase => console.log(outrafrase))
    .catch(e => console.log(e))