import {
  GET_COUNTRIES,
  GET_COUNTRY_NAME,
  CLEAN_STATE,
  GET_COUNTRY_ID,
  FILTER_BY_CONTINENT,
  FILTER_BY_ACTIVITY,
  ORDER_BY_AZ,
  ORDER_BY_POPULATION,
  POST_ACTIVITY,
} from "./actions";

const initialState = {
  allCountries: [], //
  country: [], //
  copy: [],
  copy2: [],
  countryDetail: {},
  filterActivities: [], //
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return { ...state, allCountries: action.payload };

    case GET_COUNTRY_NAME: {
      if (state.country.length > 0) {
        let newCountry = action.payload.filter((element) => {
          return !state.country.some((item) => item.id === element.id);
        });

        state.copy2 = [...state.country, newCountry].flat(); // se copia por seguridad en este estado de copia

        return { ...state, country: [...state.country, newCountry].flat() };
      } else {
        state.copy2 = [...state.country, action.payload].flat(); // se copia por seguridad en este estado de copia

        return { ...state, country: [...state.country, action.payload].flat() };
      }
    }

    case CLEAN_STATE: {
      return {
        ...state,
        country: [],
        filterActivities: [],
        copy: [],
        copy2: [],
      };
    }

    case GET_COUNTRY_ID: {
      return { ...state, countryDetail: action.payload };
    }

    case FILTER_BY_CONTINENT: {
      const show =
        state.copy2.length > 0
          ? state.copy2
          : state.country.length > 0
          ? state.country
          : state.allCountries;

      const filtered = show.filter(
        (country) => country.continents === action.payload
      );

      state.copy = filtered; // guardo una copia de filtros en otro estado de copia

      if (filtered.length === 0) {
        return state;
      } // si no hay nada en el filtro, se retorna el estado como esta

      return { ...state, country: filtered };
    }

    case ORDER_BY_AZ: {
      const array =
        state.country.length > 0 ? state.country : state.allCountries;

      const order = array.sort((a, b) => {
        const countryA = a.name || "";
        const countryB = b.name || "";

        if (action.payload === "A1") {
          return countryA.localeCompare(countryB);
        } else if (action.payload === "A2") {
          return countryB.localeCompare(countryA);
        }

        return 0;
      });
      return {
        ...state,
        country: order,
      };
    }

    case ORDER_BY_POPULATION: {
      const arr = state.country.length > 0 ? state.country : state.allCountries;
      console.log(arr);

      if (action.payload === "A1") {
        arr.sort((a, b) => a.population - b.population);
      } else if (action.payload === "A2") {
        arr.sort((a, b) => b.population - a.population);
      }

      return {
        ...state,
        country: arr,
      };
    }

    case FILTER_BY_ACTIVITY: {
      if (state.copy.length === 0 && state.copy2.length === 0) {
        const filterCountry = state.allCountries.filter((country) => {
          return country?.Activities?.map((activity) => activity.dificult)
            .join(", ")
            .includes(+action.payload);
        });

        if (filterCountry.length === 0) {
          return state;
        }

        return { ...state, country: filterCountry };
      } else {
        const aux = state.copy.concat(state.copy2);
        console.log(aux);

        const filterCountry = aux.filter((country) => {
          return country?.Activities?.map((activity) => activity.dificult)
            .join(", ")
            .includes(+action.payload);
        });

        if (filterCountry.length === 0) {
          return state;
        }

        return { ...state, country: filterCountry };
      }
    }

    default:
      return state;
  }
};
