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
      const res = await axios.get("https://api.nytimes.com/svc/topstories/v2/food.json?api-key=VLslSANKe2fXbThErESGpBMb6TUUV1fi");

      //dispachamos la acción que hará que cambie el estado de los personajes
     
      dispatch({
        type: "GET_CHARACTERS",
        payload: res.data.results,
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