const AppError = require("../utils/AppError")

// ['admin', 'customer', 'sale'].includes('admin')


/**
 * Verifica se o usuario tem permissao de acesso a rota com base no seu papel.
 * 
 * @param {string[]} roleToVerify - Um array com os papeis que tem permissao de acesso.
 * @returns {import('express').Handler} - Um middleware.
 */
function verifyUserAuth(roleToVerify) {
    return (request, response, next) => {
        const { role } = request.user;
    
        if (!roleToVerify.includes(role)) {
            throw new AppError("Somente admins podem acessar esta rota.", 401);
        }
    
        return next();
    }
}

module.exports = {verifyUserAuth}

