const { Router } = require("express");

const {getCountries,getCountriesById,postActivities,getActivities} = require("../controllers/handlers")

const router = Router();

router.get("/countries",getCountries);
router.get("/countries/:idPais", getCountriesById);
router.post("/activities",postActivities);
router.get("/activities",getActivities);

module.exports = router;
