import express from "express";

// @types/express
const app = express();

/*
Principais métodos HTTP:
- GET    => Busca um dado
- POST   => Insere um dado
- PUT    => Altera um dado
- DELETE => Remove um dado
- PATCH  => Altera um dado específico
*/

app.get("/test-get", (request, response) => {
  // Request  => Entrando no server
  // Response => Saindo do server

  return response.send("Você fez um GET!");
});

app.post("/test-post", (request, response) => {
  return response.send("Você fez um POST!");
});

// http://localhost:3000
app.listen(3000, () => console.log("Server is running."));
