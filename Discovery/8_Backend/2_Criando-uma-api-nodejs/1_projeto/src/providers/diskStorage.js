const fs = require("fs")
const path = require("path")
const uploadConfig = require('..//configs/upload')


class diskStorage {
    async saveFile(file) {
        await fs.promises.rename(
            path.resolve(uploadConfig.tmp_folder, file),            // aonde o file está
            path.resolve(uploadConfig.uploads_folder, file),        // aonde o file irá
        )
        return file
    }

    async deleteFile(file) {
        const filePath = path.resolve(uploadConfig.uploads_folder, file)
        console.log('filePath: \n', filePath)
        try {
            await fs.promises.stat(filePath)
        } catch {
            return
        }
        
        await fs.promises.unlink(filePath)        // deleta o arquivo

    }
}



module.exports = {diskStorage}

 