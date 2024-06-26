import styles from "./home.module.css";
import FilterBar from "../components/FilterBar";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import Pagination from "../components/pagination";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCountries, getCountryByName, cleanState } from "../redux/actions";

function Home() {
  //Llamo al+ todos los estados de redux
  const { allCountries, country, filterActivities } = useSelector(
    (state) => state
  );

  const dispatch = useDispatch();

  //Cuando se monte el componente corro la accion de getCountries y cargo el estado
  useEffect(() => {
    dispatch(getCountries());
    return () => {
      dispatch(cleanState());
    };
  }, []);

  //estados locales para paginacion
  const [countriesPerPage, setCountriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const totalCountries = allCountries.length;
  const lastIndex = currentPage * countriesPerPage;
  const firstIndex = lastIndex - countriesPerPage;

  //funcion que despacha la busqueda por nombre del pais
  function onSearch(name) {
    if (name === "") {
      window.alert("Ingrese un pais valido");
    } else if (name >= 0) {
      window.alert("Ingrese un pais valido");
    } else {
      dispatch(getCountryByName(name));
    }
  }

  const show =
    country.length > 0
      ? country
      : filterActivities.length > 0
      ? filterActivities
      : allCountries;

  return (
    <div>
      <NavBar onSearch={onSearch} />
      <FilterBar />
      <Pagination
        countriesPerPage={countriesPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalCountries={totalCountries}
      />
      <div className={styles.cardCont}>
        {" "}
        {show
          .map((element, index) => <Card key={index} props={element} />)
          .slice(firstIndex, lastIndex)}{" "}
      </div>
    </div>
  );
}

export default Home;
