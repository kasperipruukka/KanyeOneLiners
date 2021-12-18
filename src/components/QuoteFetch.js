import useQuotes from "../useQuotes";

const QuoteFetch = () => {
    const {loadQuote} = useQuotes();

    return(
        <div className="w-full">
            <button id="fetchQuote" onClick={loadQuote} className="xs:mb-2 sm:w-11/12 sm:h-full md:w-3/4 btn btn-primary">Fetch 1 quote</button>
        </div>
    );
}

export default QuoteFetch;