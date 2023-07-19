const  getAllTypes = require("../controllers/typeControllers");

const allTypeHandler = async (req, res)=>{ //req y res son objetos que representan la solicitud y respuesta HTTP
    try { //manejar errores
        const allTypes = await getAllTypes(); //llama a la funcion, espera el resultado y lo asigna
        res.status(200).json(allTypes); //codigo de estado que contiene la matriz devuelta por la funcion 
    } catch (error) { //si hay error...
        res.status(400).json({error: error.message});
    }
}
//exporta la ruta
module.exports = allTypeHandler
