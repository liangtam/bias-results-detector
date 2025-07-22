import {useContext} from "react";
import {ResultsContext} from "../contexts/ResultsContext";

export const useResultsContext = () => {
    const resultsContext = useContext(ResultsContext)

    if (!resultsContext) {
        throw Error('useResultsContext must be used inside a ResultsContextProvider')
    }

    return resultsContext
}