const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

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

app.post("/aprendices", (req, res) => {
  const { nombre, edad, correo } = req.body;

  if (!nombre || nombre.length < 3) {
    return res.status(400).json({
      error: "El nombre debe tener al menos 3 letras"
    });
  }

  if (!correo || !correo.includes("@")) {
    return res.status(400).json({
      error: "Debe ingresar un correo válido"
    });
  }

  const nuevoId =
    aprendices.length > 0 ? aprendices[aprendices.length - 1].id + 1 : 1;

  const nuevoAprendiz = {
    id: nuevoId,
    nombre: nombre,
    edad: parseInt(edad) || 0,
    correo: correo,
  };

  aprendices.push(nuevoAprendiz);

  res.status(201).json({
    mensaje: "Aprendiz creado exitosamente",
    Datos: nuevoAprendiz,
  });
});

app.listen(port, function () {
  console.log(`SERVIDOR: http://localhost:${port}`);
});