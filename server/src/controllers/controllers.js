const { Country, Activity, country_activity } = require("../db");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;

const findCountries = async (name) => {
  try {
    if (name) {
      const countries = await Country.findAll({
        where: { name: { [Op.iLike]: `%${name}%` } },
        include: {
          model: Activity,
          attributes: ["name", "season", "dificult", "duration"],
          through: { attributes: [] },
        },
      });
      return countries;
    } else {
      const countries = await Country.findAll({
        include: {
          model: Activity,
          attributes: ["name", "season", "dificult", "duration"],
          through: { attributes: [] },
        },
      });
      return countries;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

const findCountriesById = async (idPais) => {
  try {
    const response = await Country.findByPk(idPais, {
      include: {
        model: Activity,
        attributes: ["name", "season", "dificult", "duration"],
        through: { attributes: [] },
      },
    });
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

const createActivity = async (CountryId, name, dificult, duration, season) => {
  const filteredDB = await Activity.findAll({
    where: {
      name: { [Op.iLike]: `%${name}%` },
      dificult: dificult,
      duration: duration,
      season: season,
    },
  });

  if (filteredDB.length > 0) {
    const relacion = await country_activity.findAll({
      where: { CountryId: CountryId, ActivityId: filteredDB[0].id },
    });
    if (relacion.length === 0) {
      await filteredDB[0].addCountry(CountryId);
      return "Actividad asociada al pais";
    } else {
      return "Esta actividad ya se encuentra creada para el pais seleccionado";
    }
  } else if (filteredDB.length === 0) {
    const newActivity = await Activity.create({
      name: name,
      dificult: dificult,
      duration: duration,
      season: season,
    });
    await newActivity.addCountry(CountryId);
    return "Actividad creada correctamente";
  }
};

const findActivities = async () => {
  const allActivities = await Activity.findAll();
  return allActivities;
};

module.exports = {
  findCountries,
  findCountriesById,
  createActivity,
  findActivities,
};
