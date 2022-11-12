const express = require('express');
const app = express();

app.use(express.json());

// GET -> entregar, READ
// POST -> publicar, CREATE
// DELETE -> eliminar, DELETE
// PUT -> actualizar, UPDATE (también permite insertar un nuevo recurso)
// PATCH -> modificar, UPDATE 
// (similar al PUT, pero? Patch, solo hace modificacioens parciales)

// responde a get -> localhost:3000
app.get('/', (req, res) => {
  let mensaje = {
    id: 0,
    message: 'hola mundo'
  }
  res.json(mensaje);
});

// responde a get -> localhost:3000/messages
app.get('/messages', (req, res) => {

  let mensajes = [
    {
      id: 1,
      message: 'hola, estoy aprendiendo express',
      username: 'brian',
    },
    {
      id: 2,
      message: 'te felicito, es un framework muy interesante',
      username: 'martina',
    },
  ];
  res.json(mensajes);
});

app.get('/querystr', (req, res) => {
  // = -> asignación
  // == -> comparación, del valor
  // === -> comparación, del valor y del tipo de dato.
  if (req.query.id == 10) {
    console.log('enviaste el id igual a 10');
  }
  res.json(
    {
      message: req.query.message,
    });
});

// responde a get -> localhost:3000/messages/:id
app.get('/messages/:id', (req, res) => {
  let mensaje = {
    id: req.params.id, //leo el parámetro
    message: 'hola, el id ' + req.params.id + ', me lo enviaste tú',
    username: 'bot'
  }
  res.json(mensaje);
});

// responde a get -> localhost:3000/messages/:id/:message
app.get('/messages/:id/:message', (req, res) => {
  let mensaje = {
    id: req.params.id, //leo el parámetro
    message: req.params.message,
    username: 'bot'
  }
  res.json(mensaje);
});

app.post('/message', (req, res) => {
  res.json({
    message: req.body.message
  })
});

// /comercial/2022/09/14/cybermonday-2022-que-ofertas-de-tecnologia-pueden-llamar-tu-atencion/
// app.get('/comercial/:año/:mes/:dia/name-article')

// app.post('/', (req, res) => {
//   res.send('recibí un post');
// });

// app.put('/', (req, res) => {
//   res.send('recibí un put');
// });


// app.patch('/', (req, res) => {
//   res.send('recibí un patch');
// });

// app.delete('/', (req, res) => {
//   res.send('recibí un delete');
// });

app.listen(3000, () => {
  console.log('estamos escuchando en el puerto 3000');
});