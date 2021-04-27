var express = require("express");
var app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get("/lancamentos", (req, res) => {
    console.log("Requisição Get realizada com Sucesso");
    res.status(200).json(["Paulo Osvaldo de Silva", false, 5, 84.00]);
});

app.get("/lancamentos/relatorio", (req, res) => {
    console.log("Requisição Get Relatório");
    
    var valor1 = 12;
    var valor2 = 17;
    var valor3 = 20;
    var result = (valor1 + valor2 + valor3) / 3;

    res.send("A media das vendas é: " + result);
});

app.post("/lancamento", (req, res) => {
    console.log("Requisição Post realizada com Sucesso");
    console.log(req.body);
    console.log("Nome: " + req.body.nome);
    console.log("Ativo: " + req.body.ativo);
    console.log("Parcelas: " + req.body.parcelas);
    console.log("Valor: " + req.body.valor);

    res.send("Mensagem Enviada - Post");
});

app.put("/lancamento/:id", (req, res) => {
    console.log("Requisição Put realizada com Sucesso");
    console.log(req.body);
    console.log("id: " + req.params.id)
    console.log("Nome: " + req.body.nome);
    console.log("Ativo: " + req.body.ativo);
    console.log("Parcelas: " + req.body.parcelas);
    console.log("Valor: " + req.body.valor);

    res.send("Mensagem Enviada - Put");
});

app.delete("/lancamento/:id", (req, res) => {
    console.log("Requisição Delete realizada com Sucesso");
    console.log("O Lançamento com o código " + req.params.id + " Será Excluido");
    res.status(200).send("Lançamento Excluido");
});

app.listen(4000, () => {
    console.log("Servidor rodando na porta 4000");
});

