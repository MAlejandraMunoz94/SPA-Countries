import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY_NAME = "GET_COUNTRY_NAME";
export const GET_COUNTRY_ID = "GET_COUNTRY_ID";
export const CLEAN_STATE = "CLEAN_STATE";

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


