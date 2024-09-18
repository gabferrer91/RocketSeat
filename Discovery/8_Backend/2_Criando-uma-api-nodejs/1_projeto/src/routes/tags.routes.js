// conterá as rotas dos recursos de tags


const { Router } = require('express')

const TagsController = require('../controllers/tagsController')

const tagsRoutes = Router()

const {ensureAuth} = require('../middlewares/ensureAuth')
tagsRoutes.use(ensureAuth)

const tagsController = new TagsController()

tagsRoutes.get('/', tagsController.index)

module.exports = tagsRoutes

