import React, {createContext, useContext, useReducer} from 'react';

//This is the data layer
export const StateContext = createContext();

//Build a provider
export const StateProvider = ({reducer, intialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, intialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext);