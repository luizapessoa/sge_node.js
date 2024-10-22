const DetalhePedido = require("../models/detalhePedido");

 exports.criarDetalhePedido = async (req, res) => {
    const { pedidoId, produtoId, quantidade, preco, desconto } = req.body

    try {
        const detalhePedido = await DetalhePedido.create({
            pedidoId,
            produtoId,
            quantidade,
            preco,
            desconto,
        });

    res.json(detalhePedido)

} catch (err) {
    res.status(500).json({ error: 'Erro ao criar detalhe do pedido' });
  }
};

exports.todosDetalhes = async (req, res) => {
    try {
        const pedidos = await DetalhePedido.findAll()
        res.status(200).json(detalhePedido)

    } catch (error) {
        res.status(500).json({ error: 'erro ao buscar pedidos'})
    }
}
