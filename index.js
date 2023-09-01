const express = require ('express'); //
const mongoose = require ('mongoose'); //Bdd
const cors = require ('cors'); //Seguridad
require('dotenv').config();

const app = express();

app.listen(process.env.PORT, () => {
    for (let i = 0; i < 10 ; i++) {
        console.log('Server started for ' + i);
    }
});
