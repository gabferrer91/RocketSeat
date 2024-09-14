const {verify} = require('jsonwebtoken')             // pra verificar se o token é válido
const AppError = require('../utils/appError')
const authConfig = require('../configs/auth')


// middleware 
function ensureAuth(req, res, next) {
    const authHeader = req.headers.authorization

    if(!authHeader) {
        throw new AppError('Token JWT inválido', 401)
    }

    const [, token] = authHeader.split(' ')

    try {
        const {sub: user_id} = verify(token, authConfig.jwt.secret)
        req.user = {
            id: Number(user_id),
        }
        return next()
    } catch {
        throw new AppError('Token JWT inválido', 401)
    }
}

module.exports = {ensureAuth}