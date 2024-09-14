// Conterá todas as rotas da aplicação para carregar em "server.js" e não poluí-lo.

const { Router } = require('express')

const usersRoutes = require('./users.routes')
const notesRoutes = require('./notes.routes')
const tagsRoutes = require('./tags.routes')
const {sessionsRouter} = require('./sessions.routes')

const routes = Router()
routes.use('/users', usersRoutes)
routes.use('/notes', notesRoutes)
routes.use('/tags', tagsRoutes)
routes.use('/sessions', sessionsRouter)

module.exports = routes
