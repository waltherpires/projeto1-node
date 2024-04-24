const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Site de musicas</h1>");
});

app.get("/musicas", function (req, res) {
  res.send("<h1>Lista de musicas!</h1>");
});

app.get("/banda/:parametro", function (req, res) {
  res.send("banda: " + req.params.parametro);
});

app.get("/adicionar/:musica?", function (req, res) {
  var nome = req.params.musica;
  if (nome) {
    res.send("<h1>musica " + nome + " adicionada!</h1>");
  } else {
    res.send("escolha uma musica!");
  }
});

app.listen(process.env.PORT ?? 3000, function (erro) {
  if (erro) {
    console.log("Erro ao Iniciar.");
  } else {
    console.log("Servidor Iniciado.");
  }
});
