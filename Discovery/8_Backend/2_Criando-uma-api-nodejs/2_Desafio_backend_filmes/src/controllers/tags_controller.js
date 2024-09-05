const { sqliteConn } = require("../database/db_connection")
const errorHandler = require("../utils/errorHandler");



class tags_controller {
    async create(req, res) {
        const {user_id, note_id} = req.params
        const tags = req.body

        const database = await sqliteConn()

        const foundNote = await database.get('select * from movie_notes where id = ? and user_id = ?', [note_id, user_id])
        
        if(!foundNote) {
            throw new errorHandler("Nota não encontrada.")
        }

        tags.forEach(async tag => {
            await database.run(`insert into movie_tags (note_id, user_id, name) values
                (?, ?, ?)`, note_id, user_id, tag.name)
        })

        res.send('Tags criadas.')
    }
    


    async read(req, res){
        const {user_id} = req.params
        const {note_id, tag_id} = req.query
        const database = await sqliteConn()

        const userFound = await database.get('select * from movie_tags where user_id=?', [user_id])
        if(!userFound) {
            throw new errorHandler("User sem nota.")
        }

        if(!tag_id && !note_id) {
            console.log('caiu aqui')
            const results = await database.all(`select * from movie_tags where user_id = ?`, [user_id])
            return res.json(results)
        }
    
        if(!note_id) {
            const results = await database.all(`select * from movie_tags where user_id = ? and id = ?`, [user_id, tag_id])
            return res.json(results)
        }

        if(!tag_id) {
            const results = await database.all(`select * from movie_tags where user_id = ? and note_id = ?`, [user_id, note_id])
            return res.json(results)
        }


        const results = await database.all(`select * from movie_tags where user_id = ? and note_id = ? and id = ?`, [user_id, note_id, tag_id])
        return res.json(results)
    }



    async update(req, res){

    }



    async delete(req, res){

    }
}



module.exports = {tags_controller}