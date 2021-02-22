// Set up data layer
import React, { createContext, useContext, useReducer } from 'react';


// This is the data layer
export const StateContext = createContext();

// Provider
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)


// THis is how we use inside a component
export const useStateValue = () => useContext(StateContext);