const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')
const Pedido = require('./pedido')

const PedidoProduto = sequelize.define('PedidoProduto', {})

PedidoProduto.associate = (models) => {
    models.Pedido.belongsToMany(models.Produto,
        {
            as: 'produtos',
            through: PedidoProduto,
            foreignKey: 'pedidoId',
            otherKey: 'produtoId'
        })

        models.Produto.belongsToMany(models.Pedido,
            {
                as: 'pedidos',
                through: PedidoProduto,
                foreignKey: 'produtoId',
                otherKey: 'pedidoId'
            }
        )
}

module.exports = PedidoProduto;