const sqliteConnection = require('../../sqlite/index');
const createUsers = require('./createUsers');


async function migrationsRun() {
    const schemas = [
        createUsers
    ].join('')
    
    sqliteConnection()
    .then(db => db.exec(schemas))
    .catch(error => console.log(error))
}


module.exports = migrationsRun