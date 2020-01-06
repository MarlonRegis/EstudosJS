const imprimirResultado = function (nota){
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log('Parabens pela excelente nota')
            break
        case 8: case 7: 
            console.log('Você foi aprovado')
            break
        case 6: case 5:
            console.log('Voce está em recuperação')
            break
        default:
            console.log('Você foi reprovado!')
    }
}
/*
function imprimirResultados (nota){
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log('Parabens pela excelente nota')
            break
        case 8: case 7: 
            console.log('Você foi aprovado')
            break
        case 6: case 5:
            console.log('Voce está em recuperação')
            break
        default:
            console.log('Você foi reprovado!')
    }
}
*/

imprimirResultado(5)
//imprimirResultados(7)