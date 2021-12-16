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
                    quotes.map(({id, value}, index) => {
                        return (
                            <Quote key={id + '-' + index} id={id} value={value} />
                        );
                    })
                }
            </div>
        );
    }
}

export default QuoteList;