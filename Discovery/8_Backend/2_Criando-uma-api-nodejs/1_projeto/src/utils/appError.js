// appError -> tratando erro do lado do cliente (400)
class appError {
    constructor(message, statusCode = 400) {
        this.message = message
        this.statusCode = statusCode
    }
}

module.exports = appError