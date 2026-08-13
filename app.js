const express = require('express');
const app = express();
const port = 3000;

app.get("/", function(req, res) {
  res.send("API de aprendices, Enpoint principal");
});

app.get("/aprendices", (req, res) => {
  const aprendices = [
    {
      "Nombre": "Valeria",
      "Edad": 18,
      "Correo": "valxsc03@gmail.com",
    },
    {
      "Nombre": "Eileen",
      "Edad": 17,
      "Correo": "eileen@gmail.com",
    },
    {
      "Nombre": "Joshua",
      "Edad": 18,
      "Correo": "joshua@gmail.com",
    },
  ];
  res.json(aprendices);
});


app.listen(port, function() {
  console.log(`SERVIDOR:http://localhost: ${port}`);
});