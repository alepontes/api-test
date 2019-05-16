const mongoose = require('mongoose');
const port = `27017`
const uri = `mongodb://localhost:${port}/`;

const options = {
    useNewUrlParser: true,
    autoIndex: false,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    poolSize: 10,
    bufferMaxEntries: 0,
    useNewUrlParser: true,
};

mongoose.connect(uri, (err, res) => {
    if (!err)
        console.log('Conectado a ' + uri);
    else
        console.log('Erro ao conectar com ' + uri);
});
