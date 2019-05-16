const express = require('express');
const bodyParser = require('body-parser');
var faker = require('faker');
const port = 3001;// process.env.PORT
const app = module.exports = express();

require('./db');
const item = require('./model');

app.listen(port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Origin', 'GET, POST, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});


app.get('/', (req, res) => {
    res.json({ hello: 'world' });
})

app.get('/create', (req, res) => {

    const itens = []
    let qtd = 117;


    item.deleteMany({}, (err) => {
        if (!err)
            console.log('Dados Apagados')
        console.log('Erro ao Apagar Dados')
    })

    for (; qtd > 0; qtd--)
        itens.push({
            name: faker.name.findName(),
            email: faker.internet.email(),
            group: Math.floor(1 + Math.random() * 4),
        })

    item.create(itens, (err, resp) => {
        if (!err)
            res
                .status(210)
                .json(resp)
    })


})

app.get('/list', (req, res) => {

    item.find({}, (err, itens) => {
        if (!err)
            res.json(itens)
    })

})