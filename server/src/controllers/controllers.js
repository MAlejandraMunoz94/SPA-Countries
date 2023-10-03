const {Country,Activity} = require("../db")

const findCountries = async (name) => {
    try {
        if (name) {
            const countries = await Country.findAll({where:{name:name},include:{model: Activity,attributes:["name"], through: {attributes:[]}}});
            return countries;
        } else { 
            const countries = await Country.findAll({include:{model: Activity,attributes:["name"], through: {attributes:[]}}});
            return countries;
        };  
    } catch (error) {
        throw new Error (error.message);
    }
    
};

const findCountriesById = async (idPais) => {
    try {
    const response = await Country.findByPk(idPais,{include:{model: Activity,attributes:["name"], through: {attributes:[]}}});
    return response;

    } catch (error) {
        throw new Error (error.message);
    }
};

const createActivity = async (CountryId,name,dificult,duration,season) =>{
    try {
        const newActivity = await Activity.create({name:name,dificult:dificult,duration:duration,season:season});
        await newActivity.addCountry(CountryId);
        return newActivity;
    } catch (error) {
        throw new Error (error.message);
    }
};

const findActivities = async () => {
try {
    const allActivities = await Activity.findAll();
    return allActivities;
} catch (error) {
    throw new Error (error.message);
}
};


module.exports = {findCountries, findCountriesById, createActivity, findActivities};