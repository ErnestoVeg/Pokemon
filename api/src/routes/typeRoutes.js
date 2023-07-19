const { Router } = require('express');
const  allTypeHandler  = require("./handlers/typeHandler"); 

const typeRouter = Router();

typeRouter.get("/", allTypeHandler);

module.exports = typeRouter;