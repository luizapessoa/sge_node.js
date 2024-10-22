const express = require ('express')
const router = express.Router()

const clienteController = require('../controllers/clienteController')
const detalheController = require('../controllers/detalheController')
const pedidoController = require('../controllers/pedidoController')
const produtoController = require('../controllers/productController')

// rotas de cliente

router.post('/clientes', clienteController.criarCliente)
router.get('/clientes', clienteController.todosClientes)
router.put('/clientes/:id', clienteController.alterarCliente)
router.delete('/clientes/:id', clienteController.excluirCliente);

// rotas de detalhe 
router.post('/api/detalhes', detalheController.criarDetalhePedido);
router.get('/api/detalhes', detalheController.todosDetalhes);
router.delete('/api/detalhes/:id', detalheController.excluirDetalhe);
router.put('/api/detalhes/:id', detalheController.alterarDetalhe);

// rotas de pedido

router.post('/pedidos', pedidoController.criarPedido)
router.get('/pedidos', pedidoController.todosPedidos)
router.put('/pedidos/:id', pedidoController.alterarPedido)
router.delete('/pedidos/:id', pedidoController.excluirPedido)

// rotas de produto

router.post('/produtos', produtoController.criarProduto)
router.get('/produtos', produtoController.todosProdutos)
router.put('/produtos/:id', produtoController.alterarProduto)
router.delete('/produtos/:id', produtoController.excluirProduto);

module.exports = router;