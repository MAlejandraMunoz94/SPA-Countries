import styles from "./detail.module.css";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCountryById } from "../redux/actions";

function Detail() {
  const { id } = useParams();

  const countryDetail = useSelector((state) => state.countryDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountryById(id));
  }, []);

  if (countryDetail === null) {
    return (
      <div>
        <p>Country not found</p>
        <p>Try another ID</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <NavLink to="/home">
        <button>Back</button>
      </NavLink>
      <div>
        <img src={countryDetail?.flag} alt="" />
      </div>
      <div >
        <h2>{countryDetail?.id}</h2>
        <h3>Nombre: {countryDetail?.name}</h3>
        <h3>Continente: {countryDetail?.continents}</h3>
        <h3>Capital: {countryDetail?.capital}</h3>
        <h3>Subregion: {countryDetail?.subregion}</h3>
        <h3>Area m2: {countryDetail?.area}</h3>
        <h3>Poblacion: {countryDetail?.population}</h3>
        <div className={styles.activities}>
          <h3>
            Activities:{" "}
            {countryDetail?.Activities?.length > 0
              ? countryDetail.Activities?.map((activity) => {
                  return (
                    <div className={styles.activity}>
                      {" "}
                      <h3>Nombre: {activity.name}</h3>{" "}
                      <h3>Temporada: {activity.season}</h3>{" "}
                      <h3>Duración: {activity.duration}</h3>{" "}
                    </div>
                  );
                })
              : "No tiene actividades asignadas"}{" "}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Detail;
