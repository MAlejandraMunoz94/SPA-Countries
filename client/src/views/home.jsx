import SearchBar from "../components/SearchBar"
import FilterBar from "../components/FilterBar";
import Card from "../components/Card";
import { useState } from 'react'
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {getCountries, getCountryByName, cleanState} from "../redux/actions";


function Home() {

  //Llamo al estado de redux donde se cargan todos los paises
  const allCountries = useSelector((state) => state.allCountries);
  //Llamo al estado de redux donde se carga el pais que llamo por nombre
  const countryByName = useSelector((state) => state.country);
  const dispatch = useDispatch();

  //Cuando se monte el componente corro la accion de getCountries y cargo el estado
  useEffect(()=>{
    dispatch(getCountries());
    return () => {dispatch(cleanState());}
  },[]);

  //estado local auxiliar para confirmar si el componente tiene filtros activos
  const [auxFiltros, setAux] = useState(false);

  //funcion que despacha la busqueda por nombre del pais
  function onSearch(name) {

    if (name === ""){
      window.alert("Ingrese el pais a buscar")
    };
    setAux(true);
     dispatch(getCountryByName(name))
  };

    return (
        <div>
       <SearchBar onSearch= {onSearch} setAux={setAux} />
       <FilterBar/>

    { auxFiltros ? countryByName.map((element,index) =>(<Card key={index} props={element}/>)): allCountries.map((element) =>(<Card key={element.id} props={element}/>))} 
        </div>
    )
  };
  
  export default Home;