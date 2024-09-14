const knex = require('../database/knex')
const AppError = require('../utils/appError')
const {diskStorage} = require('../providers/diskStorage')

class userAvatarController {
    async update(req, res) {
        const user_id = req.user.id
        const avatarFilename = req.file.filename
        const DiskStorage = new diskStorage()
        
        const user = await knex('users').where({id: user_id}).first()
        
        if(!user) {
            throw new AppError("Somente users autenticados mudam foto do perfil.", 401)
        }
        
        if(user.avatar) {
            await DiskStorage.deleteFile(user.avatar)
        }
        
        const filename = await DiskStorage.saveFile(avatarFilename)
        user.avatar = filename;
        
        await knex('users').update(user).where({id: user_id})
        return res.json(user)
    }
}


module.exports = {userAvatarController}



