const express = require('express');
const app = express();
const port = 3000;

app.get("/", function(req, res) {
  res.send("API de aprendices, Enpoint principal");
});


const aprendices = [
  {
    nombre: "valeria",
    edad: 18,
    correo: "valxsc03@gmail.com",
  },
  {
    nombre: "eileen",
    edad: 17,
    correo: "eileen@gmail.com",
  },
  {
    nombre: "joshua",
    edad: 18,
    correo: "joshua@gmail.com",
  },
];

app.get("/aprendices", (req, res) => {
  res.json(aprendices);
});

app.get("/aprendices/nombre/:nombre", (req, res) => {
  const { nombre } = req.params;

  const aprendizEncontrado = aprendices.find(
    (aprendiz) => aprendiz.nombre.toLowerCase() === nombre.toLowerCase()
  );

  if (aprendizEncontrado) {
    res.json(aprendizEncontrado);
  } else {
  
    res.status(404).json({ mensaje: "Aprendiz no encontrado" });
  }
});





app.listen(port, function() {
  console.log(`SERVIDOR:http://localhost: ${port}`);
});