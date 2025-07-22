import {createContext, useState} from "react";

const ResultsContext = createContext();

const ResultsContextProvider = ({children}) => {
    const [data, setData] = useState()

    return (
        <ResultsContext.Provider value={{data, setData}}>
            {children}
        </ResultsContext.Provider>
    )
}

export {ResultsContext, ResultsContextProvider}

