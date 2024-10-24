const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

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

// Associações
Pedido.associate = (models) => {
    Pedido.belongsTo(models.Cliente, { foreignKey: 'clienteId' });
    Pedido.hasOne(models.DetalhePedido, { foreignKey: 'pedidoId', as: 'detalhe' });
};

module.exports = Pedido;
