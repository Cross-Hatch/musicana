import React, { createContext, useContext, useReducer} from "react";

export const DataLayerContext = createContext();

export const DataLayer = ({ initialState, reducer, children}) => {
    <DataLayerContext.Provider value={useReducer}>
        {children}
    </DataLayerContext.Provider>
}