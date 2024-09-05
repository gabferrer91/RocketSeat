const users_router = require('express').Router()
const {user_controller} = require('../controllers/users_controller')


const usersController = new user_controller()

users_router.use('/create', usersController.create)
users_router.use('/update/:user_id', usersController.update)
users_router.use('/delete/:user_id', usersController.delete)
users_router.use('/querying/:user_id', usersController.querying)


module.exports = {users_router}


