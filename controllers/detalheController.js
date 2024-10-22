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

exports.excluirDetalhe = async (req, res) => {
    try {
        const { id } = req.params

        const excluir = await DetalhePedido.destroy({ where: {id} })

        if (excluir) {
            res.status(204).send('funcionando')
        } else {
            res.status(404).json({ error: 'detalhes do pedido nao encontrado' })
        }

    } catch (error) {
        res.status(500).json({ error: 'erro ao excluir detalhes do pedido' })
    }
}

exports.alterarDeatalhe = async (req, res) => {
    try {
        const { id } = req.params
        const { quantidade } = req.body
        const { preco } = req.body
        const { desconto } = req.body
        
        const [updated] = await DetalhePedido.update({ nome }, {quantidade}, { preco }, { desconto }, { where: { id } })

        if (updated) {
            const detalheAtualizado = await Produto.findByPk(id)
            res.status(200).json(detalheAtualizadoAtualizado)

        } else {
            res.status(404).json({ error: 'detalhe do pedido nao encontrado' })
        }
    } catch (error) {
        res.status(500).json({ error: 'erro ao alterar detalhe do pedido' })
    }
}
