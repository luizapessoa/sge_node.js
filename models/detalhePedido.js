const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Pedido = require("./pedido");
const Produto = require("./produto");

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


DetalhePedido.associate = (models) => {
    DetalhePedido.belongsTo(models.Pedido, { foreignKey: 'pedidoId' }); 
    DetalhePedido.belongsTo(models.Produto, { foreignKey: 'produtoId' }); 
};

module.exports = DetalhePedido;
