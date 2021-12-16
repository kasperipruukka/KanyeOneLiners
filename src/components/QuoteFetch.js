import useQuotes from "../useQuotes";

const QuoteFetch = () => {
    const {loadQuote} = useQuotes();

    return(
        <div className="w-full">
            <button id="fetchQuote" onClick={loadQuote} className="m-2 btn btn-primary w-3/4 btnMaxWidth">Fetch 1 quote</button>
        </div>
    );
}

export default QuoteFetch;