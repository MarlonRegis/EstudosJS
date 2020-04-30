function Pessoa(nome) {
    this.nome = nome; // tornar a variavel nome publica
    this.falar = function() {
        console.log("Meu nome é: ", this.nome);
        /*caso nao queira usar o this.nome basta: 
        console.log(`Meu nome é: ${nome}`);
        */
    }
}
const p1 = new Pessoa("joao");
p1.falar();