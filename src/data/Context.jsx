import React, { createContext } from "react";

//import app reducer
import { data } from "./data";

// Creating GlobalContext
export const GlobalContext = createContext(data);

// Create a provider for global state
export const GlobalProvider = ({ children }) => {
	return (
		<GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
	);
};
