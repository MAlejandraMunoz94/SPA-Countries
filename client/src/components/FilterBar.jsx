import { useDispatch } from "react-redux";
import { filterByContinent, filterByActivity, orderByPopulation, orderByAz} from "../redux/actions";


function FilterBar() {

  const dispatch = useDispatch();

  function handleFilter(event) {
    dispatch(filterByContinent(event.target.value));
  };
  function handleActivity(event) {
    dispatch(filterByActivity(event.target.value));
  };
  function handlePopulation(event) {
    dispatch(orderByPopulation(event.target.value));
  };
  function handleAZ(event) {
    dispatch(orderByAz(event.target.value));
  };

    return (
        <div>
         <select onChange={handleFilter}>
        <option>Continentes</option>
        <option value="North America">Norte America</option>
        <option value="South America">Sur America</option>
        <option value="Asia">Asia</option>
        <option value="Africa">Africa</option>
        <option value="Europe">Europa</option>
        <option value="Oceania">Oceania</option>
        <option value="Antarctica">Antartica</option>
      </select>

      <select onChange={handleActivity}>
        <option>Tipo de dificultad</option>
        <option value="1">Amateur</option>
        <option value="2">Aficionado</option>
        <option value="3">Deportista</option>
        <option value="4">Competencia</option>
        <option value="5">Extremo</option>
      </select>

      <select onChange={handlePopulation}>
        <option>Poblacion</option>
        <option value="A2">Mas poblados</option>
        <option value="A1">Menos poblados</option>
      </select>

      <select onChange={handleAZ}>
        <option>Alfabetico</option>
        <option value="A1">A - Z</option>
        <option value="A2">Z - A</option>
      </select>
        </div>
    )
  };
  
  export default FilterBar;