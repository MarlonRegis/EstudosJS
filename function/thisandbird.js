function Pessoa(){
    this.idade = 0
    const self = this
    setInterval(function(){ // setInterval avalia a funcao em determinado tempo 1000 = 1s
        self.idade++
        console.log(self.idade)
    }/* .bind(this*/ , 1000)
}

new Pessoa