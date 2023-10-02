const findCountries = require("./controllers")


const getCountries = async (req,res)=>{
 const {name} = req.query;

 try {
    const response = await findCountries(name);
    res.status(200).json(response);

 } catch (error) {
    res.status(400).send(error.message);
 }

};

const getCountriesById = (req,res)=>{

};

const postActivities = (req,res)=>{

};

const getActivities = (req,res)=>{

};

module.exports = {getCountries,getCountriesById,postActivities,getActivities}