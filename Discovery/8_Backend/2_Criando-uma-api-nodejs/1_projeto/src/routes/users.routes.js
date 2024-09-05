// conterá as rotas dos recursos de usuários


const { Router } = require('express')       // modo de importar do CommonJS
const usersRoutes = Router()
const usersControllerClass = require('../controllers/usersController')

const usersController = new usersControllerClass()

// fluxo da rota -> acessa a raíz, a o middleware captura req e res e executa o que tem que fazer, e passa a bola adiante na rota para criar usuário.
usersRoutes.post('/', usersController.create)
usersRoutes.put('/:id', usersController.update)

module.exports = usersRoutes     // modo de exportar do CommonJS

