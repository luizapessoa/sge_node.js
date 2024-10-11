const express = require ('express')
const router = express.Router()
const clienteController = require('../controllers/clienteController')


router.post('/clientes', clienteController.criarCliente)
router.get('/clientes', clienteController.todosClientes)
router.put('/clientes/:id', clienteController.alterarCliente)
router.delete('/clientes/:id', clienteController.excluirCliente);

module.exports = router;