function Pessoa(){
    this.idade = 0

    const self = this
    myvar = setInterval(() =>{
        self.idade++
        console.log(self.idade)
        if(idade >10){
            clearInterval(myvar)
        }
    },1000)
}
Pessoa()


//########### Utilizando o arrow##################

