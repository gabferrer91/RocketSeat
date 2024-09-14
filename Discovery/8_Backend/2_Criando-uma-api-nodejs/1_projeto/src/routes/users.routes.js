// conterá as rotas dos recursos de usuários

const { Router } = require('express')       // modo de importar do CommonJS
const usersControllerClass = require('../controllers/usersController')
const {userAvatarController} = require('../controllers/userAvatarController')
const {ensureAuth} = require('../middlewares/ensureAuth')
const multer = require('multer')
const uploadConfig = require('../configs/upload')

const usersRoutes = Router()
const usersController = new usersControllerClass()
const UserAvatarController = new userAvatarController()
const upload = multer(uploadConfig.Multer)


// fluxo da rota -> acessa a raíz, a o middleware captura req e res e executa o que tem que fazer, e passa a bola adiante na rota para criar usuário.
usersRoutes.post('/', usersController.create)
usersRoutes.put('/', ensureAuth, usersController.update)
usersRoutes.patch('/avatar', ensureAuth, upload.single('avatar'), UserAvatarController.update)


module.exports = usersRoutes     // modo de exportar do CommonJS

