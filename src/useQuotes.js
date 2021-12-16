import { useContext, useEffect } from "react";
import { AppContext } from "./app-context";

const useQuotes = () => {
    const [state, setState] = useContext(AppContext);

    const loadQuote = async () => {
        const API_URL = 'https://api.kanye.rest/'
        let response = await fetch(API_URL);
        let data = await response.json();
        saveQuote(data.quote);
    };

    const saveQuote = (quote) => {
        let allQuotes = [...state.quotes, quote];
        setState({...state, quotes: allQuotes});
    };



    return {
        loadQuote,
        saveQuote,
        quotes: state.quotes,
    };
}

export default useQuotes;