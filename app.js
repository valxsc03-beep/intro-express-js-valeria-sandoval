require("dotenv").config();

const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_, res) => {
  res.send('Hola , estamos aprendiendo express con la ficha 3407184');
});

app.get('/ruta1', (_, res) => {
  res.json({
    datos_personales: {
      nombre: "Valeria",
      apellido: "Sandoval",
      lista_telefonos: ["3112557707", "3203704157"] 
    },
    datos_programa: {
      nombre: "ADSO",
      tipo: "Tecnologo",
      ficha: 3407184
    }
  });
});


app.listen(port, () => {
  console.log(`Servidor en funcionamiento en el puerto: ${port}`);
});
