import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCountryById } from "../redux/actions";

function Detail() {

const {id} = useParams();

const countryDetail = useSelector((state) => state.countryDetail);
const dispatch = useDispatch();

useEffect(()=>{
dispatch(getCountryById(id));
},[])

if (countryDetail === null) {
    return (
      <div>
        <p>Country not found</p>
        <p>Try another ID</p>
      </div>
    );
};

console.log(countryDetail.Activities)

    return (
        <div>
        <NavLink to = "/home">
        <button>Back</button>
        </NavLink>
        <h2>{countryDetail?.id}</h2>
        <h3>Nombre: {countryDetail?.name}</h3>
        <img src={countryDetail?.flag} alt='' />
        <h3>Continente: {countryDetail?.continents}</h3>
        <h3>Capital: {countryDetail?.capital}</h3>
        <h3>Subregion: {countryDetail?.subregion}</h3>
        <h3>Area m2: {countryDetail?.area}</h3>
        <h3>Poblacion: {countryDetail?.population}</h3>
        <h3>Activities: {countryDetail?.Activities?.length>0?countryDetail.Activities?.map((activity) => {return (<div> <h3>Nombre: {activity.name}</h3> <h3>Temporada: {activity.season}</h3> <h3>Duración: {activity.duration}</h3> </div>) }):"No tiene actividades asignadas"} </h3>
        </div>
    )
  };
  
  export default Detail;