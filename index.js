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

mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
//Estas 4 lineas de mongoose son para conectar con la base de datos

mongoose.connect(process.env.DB, (err) => {
    if (err) {
        return console.log("Error al conectar a la base de datos: ", err)
    }
    return console.log("Conectado a la base de datos: ");
})
