const {findCountries, findCountriesById, createActivity,findActivities} = require("./controllers")


const getCountries = async (req,res)=>{
 const {name} = req.query;

 try {
    const response = await findCountries(name);

   if(response.length >1){
    res.status(200).json(response);
   } else{ throw new Error ("No se encontraron paises")};

 } catch (error) {
    res.status(400).send(error.message);
 }
};

const getCountriesById = async (req,res)=>{
   const {idPais} = req.params;

   try {
      const response = await findCountriesById(idPais);
      res.status(200).json(response);

   } catch (error) {
      res.status(400).send(error.message);
   }
};

const postActivities = async (req,res) => {
   const {CountryId,name,dificult,duration,season} = req.body;

   try {
      await createActivity(CountryId,name,dificult,duration,season);
      res.status(200).send("Actividad creada correctamente")

   } catch (error) {
      res.status(400).send(error.message);
   }
};

const getActivities = async (req,res)=>{
   try {
      const response = await findActivities();

      if (response.length >1){
         res.status(200).json(response)
      } else {
         throw new Error (error.message);
      }
   } catch (error) {
      res.status(400).send(error.message);
   }
   
};

module.exports = {getCountries,getCountriesById,postActivities,getActivities}