const { Router } = require("express");
const SalesController = require("../controllers/SalesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const { verifyUserAuth } = require("../middlewares/verifyUserAuth");

const salesRoutes = Router();

const salesController = new SalesController();

salesRoutes.use(ensureAuthenticated);
salesRoutes.use(verifyUserAuth(['admin','sale']));      // array com as roles que tem acesso as rotas de salesRoutes

salesRoutes.get("/", salesController.index);

module.exports = salesRoutes;