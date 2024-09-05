const knex = require('../database/knex')

class TagsController {
    async index(req, res) {
        const {note_id} = req.params
        
        const tags = await knex('tags')
        .where({note_id: note_id})
        
        return res.json(tags)
    }

}

module.exports = TagsController