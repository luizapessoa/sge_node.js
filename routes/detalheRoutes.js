const express = require ('express')
const router = express.Router()
const detalheController = require('../controllers/detalheController')

router.post('/detalhes', detalheController.criarDetalhePedido)
router.get('detalhes', detalheController.todosDetalhes)

module.exports = router;