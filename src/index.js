const express = require('express');

const cepController = require('./controllers/cepController');

const app = express();

app.get('/lookup', cepController.lookupCEP);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`listening on port: ${PORT}`));