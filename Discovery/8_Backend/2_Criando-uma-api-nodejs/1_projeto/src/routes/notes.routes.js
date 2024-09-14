// conterá as rotas dos recursos de notas

const { Router } = require('express')       // modo de importar do CommonJS
const notesRoutes = Router()

const NotesController = require('../controllers/notesController')
const notesController = new NotesController()

const {ensureAuth} = require('../middlewares/ensureAuth')
notesRoutes.use(ensureAuth)

notesRoutes.get('/', notesController.index)
notesRoutes.post('/', notesController.create)
notesRoutes.get('/:note_id', notesController.show)
notesRoutes.delete('/:note_id', notesController.delete)


module.exports = notesRoutes     // modo de exportar do CommonJS

