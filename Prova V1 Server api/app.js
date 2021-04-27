var express = require("express");
var app = express();

app.get("/nomes", (req, res, next) =>
{
    res.json(["Solicitação abertura de página"]);
});
app.post('/nomes', (req, res) =>
{
    console.log("Chegou no Post - Lançamento de Contas - Inclusão de Registro...");
    res.status(200).json(["Paulo Osvaldo da Silva","Conta ativa","Compra parcelada","5x","84,00"]);
    res.status(200).json(["Samanta Oliveira Ferreira","Conta ativa","Compra parcelada","10x","126,80"])
});
app.put('/nomes', (req, res) =>
{
    console.log("Chegou no Put - Consulta de Lançamentos e Atualização de Registro...");
    res.status(200).json(["Paulo Osvaldo da Silva","Conta ativa","Compra parcelada","10x","56,00"]);
    res.status(200).json(["Samanta Oliveira Ferreira Santos","Conta ativa","Compra parcelada","10x","126,80"]);

});
app.delete('/nomes/:id',(req, res) =>
{
    console.log("Chegou no Delete - ");
    res.status(200).send('Registro Deletado');
});



app.listen(4000, () =>
{
    console.log("Servidor rodando na porta 4000");
});

