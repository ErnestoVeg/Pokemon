const { Router } = require('express');
const  { 
    pokemonHandler, 
    pokemonByNameHandler,
    pokemonByIdHandler,
    postPokemonHandler } = require("./handlers/pokemonHandler"); 

const pokemonRouter = Router();

pokemonRouter.get("/", pokemonHandler)

pokemonRouter.get("/name", pokemonByNameHandler);

pokemonRouter.get("/:idPokemon", pokemonByIdHandler);

pokemonRouter.post("/", postPokemonHandler);

module.exports = pokemonRouter;