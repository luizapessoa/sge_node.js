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
    clienteId: {
        type: DataTypes.INTEGER,
        references: {
            model: Cliente,
            key: 'id',

        },
    },
    
})

// pedido pertence a um cliente

Pedido.associate = (models) => {
    Pedido.belongsTo(models.Cliente, {
        foreignKey: 'clienteId',
        as: 'cliente' });

Pedido.belongsToMany(models.Produto, {
    through: models.PedidoProduto,
    as: 'produtos',
    foreignKey: 'pedidoId',
    otherKey: 'produtoId'
    });
};
module.exports = Pedido;