const {tags_controller} = require('../controllers/tags_controller')
const tags_router = require('express').Router()

const tagsController = new tags_controller()

tags_router.post('/create/:user_id/:note_id', tagsController.create)
tags_router.get('/read/:user_id', tagsController.read)
tags_router.put('/update/:user_id/:tag_id', tagsController.update)
tags_router.delete('/delete/:user_id/:tag_id', tagsController.delete)



module.exports = {tags_router}


