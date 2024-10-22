const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Pedido = require("./pedido")
const Produto = require("./produto")

const DetalhePedido = sequelize.define('DetalhePedido', {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },

    preco: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },

    desconto: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
});

DetalhePedido.belongsTo(Pedido, { foreignKey: 'detalhe_pedido_id'})
DetalhePedido.belongsTo(Produto, { foreignKey: 'detalhe_produto_id'})

module.exports = DetalhePedido;