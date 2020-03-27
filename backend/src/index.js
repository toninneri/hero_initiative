const express = require('express');

const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

/**
 * Rota / recurso tentando...
 */

app.listen(3333);