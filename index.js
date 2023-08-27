const express = require ('express'); //
const mongoose = require ('mongoose'); //Bdd
const cors = require ('cors'); //Seguridad
require('dotenv').config();

const app = express();

app.listen(3001, () => Console.log('Server started'));
