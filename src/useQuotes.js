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
        let guid = crypto.randomUUID();
        let allQuotes = [...state.quotes, {id: guid, value: quote}];
        setState({...state, quotes: allQuotes});
    };

    const deleteQuote = (q) => {
        let unDeletedQuotes = state.quotes.filter((quote) => {
            return !(
                q.id === quote.id
            );
        });
        setState({...state, quotes: unDeletedQuotes});
    };

    const deleteAllQuotes = () => {
        setState({...state, quotes: []});
    }

    return {
        loadQuote,
        saveQuote,
        deleteQuote,
        deleteAllQuotes,
        quotes: state.quotes,
        totalCount: state.quotes.length,
    };
}

export default useQuotes;