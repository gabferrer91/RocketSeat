const sessionsRouter = require('express').Router()

const {SessionsController} = require('../controllers/sessionController')
const sessionsController = new SessionsController()

sessionsRouter.post('/', sessionsController.create)

module.exports = {sessionsRouter}

