const porta = 3003;

const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const banco = require('./db');

app.use(bodyParser.urlencoded({ extended: true }))


app.get('/produtos', (req, res, next) => {
    res.send(banco.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(banco.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = banco.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = banco.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = banco.deleteProduto(req.params.id);
    res.send(produto);
})


app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})