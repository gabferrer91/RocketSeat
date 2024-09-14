const knex = require('../database/knex')
const AppError = require('../utils/appError')
const {compare} = require('bcryptjs')
const authConfig = require('../configs/auth')
const {sign} = require('jsonwebtoken')

class SessionsController {
    async create(req, res) {
        const {email, password} = req.body;

        const user = await knex('users').where({email}).first()
        
        const passwordCheck = await compare(password, user.password)

        if(!user || !passwordCheck) {
            throw new AppError("Email ou senha incorreta.", 401)
        }

        // jwt
        const {secret, expiresIn} = authConfig.jwt
        const token = sign({}, secret, {
            subject: String(user.id),
            expiresIn
        })

        return res.json({user, token})
    }
}


module.exports = {SessionsController}

