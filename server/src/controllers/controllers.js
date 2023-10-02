const {Country,Activity} = require("../db")

const findCountries = async (name) => {
    try {
        if (name) {
            const countries = await Country.findAll({where : {name:name}});
            return countries;
        } else { const countries = await Country.findAll();
            return countries;}   
    } catch (error) {
        throw new Error (error.message)
    }
    
}

module.exports = findCountries;