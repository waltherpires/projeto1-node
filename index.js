const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Tentando modificar pelo Notebook</h1>");
});

app.get("/itens", function (req, res) {
  res.send("<h1>Lista de itens!</h1>");
});

app.get("/consulta/:parametro", function (req, res) {
  res.send("retorno consulta:" + req.params.parametro);
});

app.get("/cadastro/:nome?", function (req, res) {
  var nome = req.params.nome;
  if (nome) {
    res.send("<h1>item " + nome + " criado!</h1>");
  } else {
    res.send("item criado!");
  }
});

app.listen(process.env.PORT ?? 3000, function (erro) {
  if (erro) {
    console.log("Erro ao Iniciar.");
  } else {
    console.log("Servidor Iniciado.");
  }
});
