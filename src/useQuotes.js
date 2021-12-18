import { useContext, useEffect } from "react";
import { AppContext } from "./app-context";

const useQuotes = () => {
    const [state, setState] = useContext(AppContext);

    useEffect(() => {
        filterQuotes();
    }, [state.searchWord, state.filter, state.quotes]);

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
    };

    const filterQuotes = () => {
        let matchedQuotes = state.quotes.filter((quote) => {
            let quoteArrayCount = quote.value.split(' ').length;
            if (parseInt(state.searchWord) >= quoteArrayCount) return quote;
        });
        setState({...state, filteredQuotes: matchedQuotes});
    };
    
    const setSearchWord = (word) => {
        if (word > 0 ) setState({...state, searchWord: word})
    };

    return {
        loadQuote,
        saveQuote,
        deleteQuote,
        deleteAllQuotes,
        setSearchWord,
        quotes: state.quotes,
        totalCount: state.quotes.length,
        filteredCount: state.filteredQuotes.length,
        searchWord: state.searchWord,
        filteredQuotes: state.filteredQuotes,
    };
}

export default useQuotes;