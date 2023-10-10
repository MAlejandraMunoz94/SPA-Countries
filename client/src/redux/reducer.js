import { GET_COUNTRIES, GET_COUNTRY_NAME, CLEAN_STATE, GET_COUNTRY_ID} from "./actions";

const initialState = { allCountries: [], country: [], countryDetail:{}};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return { ...state, allCountries: action.payload };

    case GET_COUNTRY_NAME: {

      if (state.country.length>0){

        let newCountry = action.payload.filter(el => {
          return !state.country.some(item => item.id === el.id)
        })
      
      return { ...state, country: [...state.country, newCountry].flat() };
    } else{
    return { ...state, country: [...state.country, action.payload].flat() }; }
    }

    case CLEAN_STATE:
      return { ...state, country: [] };

    case GET_COUNTRY_ID:
      return {...state, countryDetail: action.payload };

    default:
      return state;
  }
};
