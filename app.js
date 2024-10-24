const express = require('express');
const bodyParser = require('body-parser');
const rotas = require('./routes/routes');
const sequelize = require('./config/database');

const app = express();


app.use(express.json());
app.use(bodyParser.json());

app.use('/api', rotas);

const startServer = async () => {
    try {
        await sequelize.sync();
        console.log('banco de dados conectado');
        app.listen(3000, () => {
            console.log('servidor rodando na porta 3000');
        });
    } catch (error) {
        console.error('erro ao conectar ao banco de dados: ', error);
    }
};

startServer();
