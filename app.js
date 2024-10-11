const express = require('express')
const bodyParser = require('body-parser')
const productRoutes = require('./routes/produtoRoutes')
const clienteRoutes = require('./routes/clienteRoutes')
const pedidoRoutes = require('./routes/pedidoRoutes')
const sequelize = require('./config/database')

const app = express ()
app.use(express.json())
app.use(bodyParser.json())
app.use('/api', productRoutes)
app.use('/api', clienteRoutes)
app.use('/api', pedidoRoutes)

const startServer = async () => {
    try {
        await sequelize.sync()
        console.log('banco de dados conectado')
        app.listen(3000, () => {
            console.log('servidor rodando na porta 3000')
        })

    } catch (error) {
        console.error('erro ao conectar ao banco de dados: ', error)
    }
}

startServer()