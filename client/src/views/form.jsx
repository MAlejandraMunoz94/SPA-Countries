import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCountries, postActivity } from "../redux/actions";
import validations from "../components/validation"


const Form = () => {
  const allCountries = useSelector((state) => state.allCountries);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sortedCountries = allCountries
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name)); //ordeno los paises por nombre

  const [selectedCountries, setSelectedCountries] = useState([]);
  const [formError, setFormError] = useState({});
  const [form, setForm] = useState({
    countryId: [],
    name: "",
    dificult: 0,
    duration: 0,
    season: "",
  });

  const handleValidation = () => {
    const errors = validations(form);
    setFormError(errors);
  };

  const handleFormData = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleCountriesChange = (event) => {
    const selectedCountryId = event.target.value;

    const selectedCountry = allCountries.find(
      (country) => country.id === selectedCountryId
    );
    setSelectedCountries((prevSelectedCountries) => {
      if (
        prevSelectedCountries.some(
          (country) => country.id === selectedCountryId
        )
      ) {
        return prevSelectedCountries.filter(
          (country) => country.id !== selectedCountryId
        );
      } else {
        return [...prevSelectedCountries, selectedCountry];
      }
    });
  };

  const handleRemoveCountry = (countryId) => {
    setSelectedCountries((prevSelectedCountries) => {
      return prevSelectedCountries.filter((id) => id !== countryId);
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Llamo a la función postActivity con los datos del formulario
    const activityData = {
      name: form.name,
      dificult: +form.dificult,
      duration: +form.duration,
      season: form.season,
      CountryId: form.countryId
    };

    // Envía los datos al action postActivity
    console.log(activityData)
    dispatch(postActivity(activityData));
    navigate("/home");
  };

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  useEffect(() => {
    const countriesTransform = selectedCountries.map((country) => country.id);
    setForm((prevForm) => ({ ...prevForm, countryId: countriesTransform }));
  }, [selectedCountries]);

  useEffect(() => {
    handleValidation();
  }, [form]);

  return (
    <div >
      <form onSubmit={handleSubmit}>
        <label>Nombre de la actividad:</label>
        <input type="text" name="name" onChange={handleFormData} />
        {formError.name ? (
          <p >{formError.name}</p>
        ) : (
          <p>
            <br />
          </p>
        )}

        <label>Dificultad:</label>
        <select name="dificult" value={form.dificult} onChange={handleFormData}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        {formError.dificult ? (
          <p >{formError.dificult}</p>
        ) : (
          <p>
            <br />
          </p>
        )}
        <label>Temporada:</label>
        <select name="season" value={form.season} onChange={handleFormData}>
          <option value="">Seleccione una temporada</option>
          <option value="Otoño">Otoño</option>
          <option value="Primavera">Primavera</option>
          <option value="Invierno">Invierno</option>
          <option value="Verano">Verano</option>
        </select>
        {formError.season ? (
          <p >{formError.season}</p>
        ) : (
          <p>
            <br />
          </p>
        )}

        <label>Duracion:</label>
        <input
          type="integer"
          name="duration"
          value={form.duration}
          onChange={handleFormData}
        />
        {formError.duration ? (
          <p >{formError.duration}</p>
        ) : (
          <p>
            <br />
          </p>
        )}

        <div >
          <label>* Paises:</label>
          <select
            name="countryId"
            onChange={handleCountriesChange}
          >
            <option value="" disabled>
              Seleccione el pais{" "}
            </option>
            {sortedCountries.map((country) => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
          </select>
          
          <div>
            {selectedCountries.map((countryId) => {
              const country = allCountries.find(
                (country) => country.id == countryId
              );
              return (
                <div>
                  <span>{country?.name}</span>
                  <button
                    onClick={() => handleRemoveCountry(countryId)}
                  >
                    X
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        {formError.countryId && (
          <p>{formError.countryId}</p>
        )}
        <br />

        <button
        onClick = {handleSubmit}
          type="submit"
        >
          Crear Actividad{" "}
        </button>
      </form>
    </div>
  );
};

export default Form;
