import useQuotes from "../useQuotes";
import Quote from "./Quote";

const QuoteList = () => {
    const {quotes} = useQuotes();
    return(
        <div className="quoteWidth">
            <h4>Quotes</h4>
            <hr />
            {
                quotes.map((quote, index) => {
                    return (
                        <Quote key={quote + '-' + index} quote={quote} />
                    );
                })
            }
        </div>
    );
}

export default QuoteList;