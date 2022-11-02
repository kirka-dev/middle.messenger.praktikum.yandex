const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static('docs'));

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/docs/index.html`);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
