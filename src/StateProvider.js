import {createContext, useContext, useReducer} from "react";


export const StateContext = createContext();

export const StateProvider =( {reducer, initialState, data, children } )=>(
  <StateContext.Provider value ={ useReducer(reducer,initialState,data)}>
         {children}
  </StateContext.Provider>	
  	  );
export const useStateValue = () => useContext(StateContext);