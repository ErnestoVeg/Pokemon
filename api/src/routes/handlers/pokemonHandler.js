const { 
    getAllPokemon,
    getPokemonById, 
    createPokemon, 
    } = require("../controllers/pokemonControllers");

const pokemonHandler = async(req, res) => {
   try {
       const allPokemon = await getAllPokemon();
       res.status(200).json(allPokemon);
   } catch (error) {
       res.status(400).json({ error: error.message });
   }
}

const pokemonByNameHandler = async(req,res) => {
   const { name } = req.query;
   try {
       const pokemonByName = await getAllPokemon(name);
       res.status(200).json(pokemonByName);
   } catch (error) {
       res.status(400).json({ error: error.message });
   }
}

const pokemonByIdHandler = async(req,res) => {
   const { id } = req.params;
   try {
       const pokemonById = await getPokemonById(id);
       res.status(200).json(pokemonById);
   } catch (error) {
       res.status(400).json({ error: error.message });
   }
}

const postPokemonHandler = async(req,res) => {
   try {
        const { id, name, image, hp, attack, defense, speed, height, weight, types } = req.body;
        if(!name||!image||!hp||!attack||!defense||!speed||!types){
            throw Error('insufficient fields')
        }else{
            const newPokemon = await createPokemon(id, name, image, hp, attack, defense, speed, height, weight, arrTypes)
            res.status(200).json(newPokemon);
        }     
   } catch (error) {
       res.status(400).json({ error: error.message });
   }
}

module.exports = {
    pokemonHandler, 
    pokemonByNameHandler,
    pokemonByIdHandler,
    postPokemonHandler
}