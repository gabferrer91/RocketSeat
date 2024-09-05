// conterá as rotas dos recursos de tags


const { Router } = require('express')

const TagsController = require('../controllers/tagsController')

const tagsRoutes = Router()

const tagsController = new TagsController()

tagsRoutes.get('/:note_id', tagsController.index)

module.exports = tagsRoutes

