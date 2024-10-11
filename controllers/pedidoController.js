const Pedido = require('../models/Pedido')
const Cliente = require('../models/cliente')

exports.criarPedido = async (req, res) => {
    try {
        const { clienteId, dataCompra } = req.body;

        const cliente = await Cliente.findByPk(clienteId)

        if(!cliente) {
            return res.status(404).json({ message: 'cliente nao encontrado' })
        }

        const novoPedido = await Pedido.create({
            clienteId: clienteId,
            dataCompra: dataCompra
        })

        return res.status(201).json(novoPedido)
    } catch (error) {
        return res.status(500).json({ message: 'erro ao criar pedido', error})
    }
}

exports.todosPedidos = async (req, res) => {
    try {
        const pedidos = await Pedido.findAll()
        res.status(200).json(pedidos)

    } catch (error) {
        res.status(500).json({ error: 'erro ao buscar pedidos'})
    }
}