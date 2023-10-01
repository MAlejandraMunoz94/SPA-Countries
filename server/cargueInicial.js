const {Country } = require("../server/src/db");
const axios = require ("axios")
// funcion para cargar los paises desde la api  hasta la bdd al iniciar el server
const cargueInicial = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/countries`);

      const paises = data.map((element) => ({
        id: element.cca3,
        name: element.name.common,
        flag: element.flags.png,
        region: element.region,
        capital: element.capital ? element.capital[0] : "No registra capital",
        subregion: element.subregion ? element.subregion : "No registra subregion",
        area: element.area,
        population: element.population,
      }));

      await Country.bulkCreate(paises);
      console.log("Se carga correctamente");
      
    } catch (error) {
      throw new Error(error.message);
    }
  };

  module.exports = cargueInicial;