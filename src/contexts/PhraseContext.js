import {createContext, useState} from "react";

const PhraseContext = createContext();

const PhraseContextProvider = ({children}) => {
    const [phrase, setPhrase] = useState({
        phrase:"",
        image:null
    })
    console.log({phrase})
    return (
        <PhraseContext.Provider value={{phrase, setPhrase}}>
            {children}
        </PhraseContext.Provider>
    )
}

export {PhraseContext, PhraseContextProvider}

