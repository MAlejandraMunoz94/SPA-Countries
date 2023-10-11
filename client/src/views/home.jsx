import SearchBar from "../components/SearchBar"
import FilterBar from "../components/FilterBar";
import Card from "../components/Card";
import Pagination from "../components/pagination";
import { useState } from 'react'
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {getCountries, getCountryByName, cleanState} from "../redux/actions";


function Home() {

  //Llamo al+ todos los estados de redux 
  const {allCountries, country, filterActivities} = useSelector((state) => state);

  const dispatch = useDispatch();

  //Cuando se monte el componente corro la accion de getCountries y cargo el estado
  useEffect(()=>{
    dispatch(getCountries());
    return () => {dispatch(cleanState());}
  },[]);

  //estados locales para paginacion
  const [countriesPerPage, setCountriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const totalCountries = allCountries.length;
  const lastIndex = currentPage * countriesPerPage;
  const firstIndex = lastIndex - countriesPerPage;

  //funcion que despacha la busqueda por nombre del pais
  function onSearch(name) {

    if (name === ""){
      window.alert("Ingrese el pais a buscar")
    };
     dispatch(getCountryByName(name))
  };

  const show =   country.length>0 ? country:  filterActivities.length>0 ?  filterActivities : allCountries;

    return (
        <div>
       <SearchBar onSearch= {onSearch}/>
       <FilterBar/>

    {  show.map((element,index) =>(<Card key={index} props={element}/>)).slice(firstIndex, lastIndex) } 
       <Pagination countriesPerPage = {countriesPerPage} currentPage = {currentPage} setCurrentPage = {setCurrentPage} totalCountries = {totalCountries}/>
        </div>

    )
  };
  
  export default Home;