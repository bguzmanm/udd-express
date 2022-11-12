const fs = require('fs');

function crear(file_name, content_init) {
  //writeFile crea el archivo, y de existir, reemplaza el conteido
  fs.writeFile(file_name, content_init, (error) => {

    if (error) console.log(error);

    console.log('guardado el archivo');
  });

}

function agregar(file_name, content) {
  //appendFile agrega contenido a un archivo
  fs.appendFile(file_name, content, (error) => {
    if (error) console.log(error);
    console.log('archivo guardado');
  })
}

// crear('nombres.txt', 'Marcela\n');
// agregar('nombres.txt', 'Luis\n');

fs.readFile('nombres.txt', 'utf-8', (error, data) => {
  if (error) console.log(error);
  let valor = data.concat(' y el Victor');
  console.log(valor);
});

fs.unlink('nombres.txt', (error) => {
  if (error) console.log(error);
  console.log('Archivo borrado');
})
