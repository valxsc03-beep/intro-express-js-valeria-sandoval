import express from 'express';
// import {configDotenv} from "dotenv"
// configDotenv();
import "dotenv/config" 
import bodyparser from "body-parser";

const app = express();
const port = process.env.PORT || 3000;

//configurar el uso de body-parser
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get("/", (_, res) => {
  res.send(`Hola , estamos aprendiendo express con la ficha 3407184`);
});

//otro endopint, funcione de flecha
app.get("/productos", (req,res) => {
  //usando templates strings
  res.send(`<h1>listado de productos</h1>
    <ol>
      <li>televisor</li>
      <li>celular</li>
      <li>impresora</li>
    </ol>`);
});

app.get("/productos/:nombre",(req, res) => {
    const producto = req.params.nombre
    res.send(`El producto es ${producto}`)
  });

app.get("/saludo/:nombre",(req, res) => {
    const {nombre} = req.params;

    if (nombre.lenght < 3) {
      return res.status(400).json({
        error: "El nombre debe tener al menos 3 letras"
      });
    }
    res.send(`Hola ${nombre}, bienvenido`)
  });

app.get("/producto/:nombre",(req, res) => {
    const {nombre} = req.params;
    res.json({
      id: 1,
      Nombre: nombre,
      stok: 20,
      precio: 10000,
      Categoria: "tecnologia"
    });
});

app.get("/product/:categoria/:id", (req,res)=> {
    const { categoria, id } = req.params;
    res.json ({
      servidor: "express",
      categoria,
      id
    });
});


app.listen(port, () => {
  console.log(`Servidor en funcionamiento en el puerto: ${port}`);
});

