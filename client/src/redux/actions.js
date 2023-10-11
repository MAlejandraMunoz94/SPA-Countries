import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY_NAME = "GET_COUNTRY_NAME";
export const GET_COUNTRY_ID = "GET_COUNTRY_ID";
export const CLEAN_STATE = "CLEAN_STATE";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const ORDER_BY_AZ = "ORDER_BY_AZ";
export const ORDER_BY_POPULATION = "ORDER_BY_POPULATION";
export const POST_ACTIVITY = "POST_ACTIVITY";


export function getCountries() {
  const endpoint = "http://localhost:3001/countries";
  return async (dispatch) => {
    let response = await axios(endpoint);
    let { data } = response;
    return dispatch({
      type: "GET_COUNTRIES",
      payload: data,
    });
  };
}

export function getCountryByName(name) {
  
  const endpoint = "http://localhost:3001/countries?name="+name;
  return async (dispatch) => {
    let response = await axios(endpoint);
    let { data } = response;
    
    return dispatch({
      type: "GET_COUNTRY_NAME",
      payload: data,
    });
  };
}

export function cleanState() {
  
    return {
      type: "CLEAN_STATE",
    };
};

export function getCountryById(id){

  const endpoint = "http://localhost:3001/countries/"+id;
  return async (dispatch) => {
    let response = await axios(endpoint);
    let { data } = response;
    console.log(data);

    return dispatch({
      type: "GET_COUNTRY_ID",
      payload: data,
    });
  };
};

export function filterByContinent(continent) {
  return { type: "FILTER_BY_CONTINENT", payload: continent };
}

export function filterByActivity(activity) {
  return { type: "FILTER_BY_ACTIVITY", payload: activity };
}
export function orderByAz(order) {
  return { type: "ORDER_BY_AZ", payload: order };
}
export function orderByPopulation(order) {
  return { type: "ORDER_BY_POPULATION", payload: order };
}
export function postActivity(act) {
  const endpoint = "http://localhost:3001/activities";
  return async (dispatch) => {
    let response = await axios.post(endpoint, act);
    let { data } = response;

    return dispatch({
      type: "POST_ACTIVITY",
      payload: data,
    });
  };
};
