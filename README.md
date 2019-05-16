# API de Teste


## EndPoints

**GET /create**
Criar e introduzir os dados no banco


**GET /list**
Listar dados previamente cadastrados


> O endpoint */create* foi introduzido para justificar o uso do banco, os dados são criados e salvos chamando essa rota


## Rodando a API
Para rodar a API é necessario
```bash

    #Usando NPM
    npm install
    npm start

    #Usando Yarn
    yarn
    yarn start
```       

MongoDB
```bash

    # Startando MongoDB (Windows)
    "C:\Program Files\MongoDB\Server\3.6\bin\mongod" --port 27017

    # Caso tenha configurado o MongoDB como variavel ambiente, faça apenas (Windows)
    mongod --port 27017

    # Linux/Docker
    docker run -d -p 27017:27017 mongo

```  

> **Importante:** *Caso altere o parametro ```--port```, altere tambem [aqui](./db.js), a API espera o mongoDB rodando na porta padrão.*

> A API roda na porta 3001 por padrão


## Dev Stack
Necessario

* [NodeJS](https://nodejs.org/en/) - Plataforma de Aplicação
* [MongoDB](https://www.mongodb.com/download-center#community) - Banco de Dados
* [Git](https://git-scm.com/downloads) - Versionamento de Código