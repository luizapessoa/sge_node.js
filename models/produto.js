const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Produto = sequelize.define('Produto', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    preco: {
        type: DataTypes.DECIMAL, 
        allowNull: false,
    },
});

Produto.associate = (models) => {
    Produto.belongsToMany(models.Pedido, {
        through: models.PedidoProduto,
        as: 'pedidos',
        foreignKey: 'produtoId',
        otherKey: 'pedidoId'
    });
};

module.exports = Produto;
