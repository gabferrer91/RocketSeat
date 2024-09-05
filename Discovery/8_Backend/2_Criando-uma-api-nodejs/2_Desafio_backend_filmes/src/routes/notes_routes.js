const {Router} = require('express')
const {notes_controller} = require('../controllers/notes_controller')

const notes_routes = Router()
const notesController = new notes_controller()

notes_routes.post('/create', notesController.create)
notes_routes.delete('/delete/:user_id/:note_id', notesController.delete)
notes_routes.get('/read/', notesController.read)
notes_routes.put('/update/:user_id/:note_id', notesController.update)



module.exports = {notes_routes}


