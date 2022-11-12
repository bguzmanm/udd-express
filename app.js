const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const { stringify } = require('querystring');

app.use(express.json());

app.post('/message/:fileName', (req, res) => {
  let fileName = `${req.params.fileName}.txt`;

  let content = `${JSON.stringify(req.body)},`;
  fs.appendFile(fileName, content, (e) => {
    if (e) console.error(e);
    console.log('archivo guardado');
  });

  res.json({
    message: 'Ok!'
  });
});

app.get('/message/:fileName', (req, res) => {
  let fileName = `${req.params.fileName}.txt`;
  fs.readFile(fileName, 'utf-8', (error, data) => {
    if (error) console.log(error);
    res.json(JSON.parse(`[${data.substring(0, data.length - 1)}]`));
  });
});

app.listen(port, () => {
  console.info(`app listen in port ${port}`);
});