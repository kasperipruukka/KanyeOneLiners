import useQuotes from "../useQuotes";
import Quote from "./Quote";

const QuoteList = () => {
    const {quotes} = useQuotes();

    if (quotes.length < 1) {
        return (
            <div className="quoteWidth">
                <h4>Quotes</h4>
                <hr />
                <p>No quotes!</p>
            </div>
        );
    }
    else {
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
}

export default QuoteList;