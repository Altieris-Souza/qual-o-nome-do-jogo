// Primeiro importamos o express utilizando a função require.
const express = require("express");

// Criamos uma instância do express com "express()".
const app = express();

// Estamos definindo uma rota "/" com o método GET.
// Sua função é apenas retornar uma resposta
// "Hello, Express!" para o cliente.
app.get("/", (req, res) => {
  return res.send("Hello, Express!");
});

// Porta onde será executada.
const PORT = 3000;

// E finalmente, mapeamos o express para ouvir a porta definida a cima.
// Primeiro parâmetro do 'listen' sempre será a porta em que a aplicação está rodando.
app.listen(PORT, () => {
  console.log(`App rodando em http://localhost:${PORT}`);
});
