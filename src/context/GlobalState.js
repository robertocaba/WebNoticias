import React, { createContext, useReducer } from 'react';
import axios from 'axios'
import AppReducer from "./AppReducer";

const initialState = {
  listNews: []
}

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);
  
    //Función que nos traé los personajes de ricky morty
    const getCharacters = async () => {
      const res = await axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key= CrNmyABOU6AniEf58hmAj4KguvQI1PX5");

      //dispachamos la acción que hará que cambie el estado de los personajes
      dispatch({
        type: "GET_CHARACTERS",
        payload: res.data.response.docs,
      });
    };
  
    return (
      <GlobalContext.Provider
      //pasamos los valores del provider
        value={{
          listNews: state.listNews,
          getCharacters,
        }}
      >
        {children}
      </GlobalContext.Provider>
    );
  };