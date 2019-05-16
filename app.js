const express = require('express');
const bodyParser = require('body-parser');
const port = 3001;// process.env.PORT
const app = module.exports = express();


app.listen(port, () => console.log("Rodando"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Origin', 'GET, POST, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});


app.get('/', (req, res) => {
    res.json({ hello: 'world' });
})

app.get('/list', (req, res) => {

    const itens = [
        {
            "image": "",
            "name": "Alexandre Pontes",
            "email": "alexandrelopespontes@gmail.com",
            "group": "1"
        },
        {
            "image": "",
            "name": "Alexandre Pontes",
            "email": "alexandrelopespontes@gmail.com",
            "group": "1"
        },
        {
            "image": "",
            "name": "Alexandre Pontes",
            "email": "alexandrelopespontes@gmail.com",
            "group": "2"
        },
        {
            "image": "",
            "name": "Alexandre Pontes",
            "email": "alexandrelopespontes@gmail.com",
            "group": "2"
        },
        {
            "image": "",
            "name": "Alexandre Pontes",
            "email": "alexandrelopespontes@gmail.com",
            "group": "2"
        },
        {
            "image": "",
            "name": "Alexandre Pontes",
            "email": "alexandrelopespontes@gmail.com",
            "group": "2"
        },
        {
            "image": "",
            "name": "Alexandre Pontes",
            "email": "alexandrelopespontes@gmail.com",
            "group": "2"
        },

        {
            "image": "",
            "name": "Alexandre Pontes",
            "email": "alexandrelopespontes@gmail.com",
            "group": "3"
        },
        {
            "image": "",
            "name": "Alexandre Pontes",
            "email": "alexandrelopespontes@gmail.com",
            "group": "3"
        },
        {
            "image": "",
            "name": "Alexandre Pontes",
            "email": "alexandrelopespontes@gmail.com",
            "group": "3"
        },
        {
            "image": "",
            "name": "Alexandre Pontes",
            "email": "alexandrelopespontes@gmail.com",
            "group": "3"
        },
        {
            "image": "",
            "name": "Alexandre Pontes",
            "email": "alexandrelopespontes@gmail.com",
            "group": "3"
        },
        {
            "image": "",
            "name": "Alexandre Pontes",
            "email": "alexandrelopespontes@gmail.com",
            "group": "3"
        },

        {
            "image": "",
            "name": "Alexandre Pontes",
            "email": "alexandrelopespontes@gmail.com",
            "group": "4"
        },
        {
            "image": "",
            "name": "Alexandre Pontes",
            "email": "alexandrelopespontes@gmail.com",
            "group": "4"
        },
        {
            "image": "",
            "name": "Alexandre Pontes",
            "email": "alexandrelopespontes@gmail.com",
            "group": "4"
        },
        {
            "image": "",
            "name": "Alexandre Pontes",
            "email": "alexandrelopespontes@gmail.com",
            "group": "4"
        },
        {
            "image": "",
            "name": "Alexandre Pontes",
            "email": "alexandrelopespontes@gmail.com",
            "group": "4"
        },
        {
            "image": "",
            "name": "Alexandre Pontes",
            "email": "alexandrelopespontes@gmail.com",
            "group": "4"
        },
        {
            "image": "",
            "name": "Alexandre Pontes",
            "email": "alexandrelopespontes@gmail.com",
            "group": "4"
        }
        ,
        {
            "image": "",
            "name": "Alexandre Pontes",
            "email": "alexandrelopespontes@gmail.com",
            "group": "4"
        },
        {
            "image": "",
            "name": "Alexandre Pontes",
            "email": "alexandrelopespontes@gmail.com",
            "group": "4"
        },
        {
            "image": "",
            "name": "Alexandre Pontes",
            "email": "alexandrelopespontes@gmail.com",
            "group": "4"
        }
    ]

    console.log()
    res.json(itens)

})