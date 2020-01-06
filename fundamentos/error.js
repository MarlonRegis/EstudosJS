function tratarErrorELancar(erro    ){
    //throw 'error number: ' + e
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }

}

function imprimirNomeGritando (obj){
    try{
        console.log(obj.name.toUpperCase()+ '!!!!')
        e = 0
    }catch (e){
        e = 100
        tratarErrorELancar(e)
    }finally{
        console.log('Processo finalizado') 
    }
}

const objteste = {
    nome : 'Roberto'
}
imprimirNomeGritando(objteste)