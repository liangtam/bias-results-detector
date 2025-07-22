import {useContext} from "react";
import {PhraseContext} from "../contexts/PhraseContext";

export const usePhraseContext = () => {
    const phraseContext = useContext(PhraseContext)

    if (!phraseContext) {
        throw Error("Must use inside PhraseContextProvider")
    }

    return phraseContext
}