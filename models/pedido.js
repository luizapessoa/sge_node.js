const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')
const Cliente = require('./cliente')

const Pedido = sequelize.define('Pedido', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    dataCompra: {
        type: DataTypes.DATE,

    },
    
});

Pedido.belongsTo(Cliente, { foreignKey: 'clienteId' })
module.exports = Pedido;