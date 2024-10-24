const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const Cliente = sequelize.define('Cliente', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
});

Cliente.associate = models => {
    Cliente.hasMany(models.Pedido,
        { foreignKey: 'clienteId', as: 'pedidos' }
    )
}

module.exports = Cliente;
