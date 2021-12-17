import useQuotes from "../useQuotes";

const QuoteDelete = () => {
    const {deleteAllQuotes} = useQuotes();

    const deleteClick = () => {
        deleteAllQuotes();
    }

    return(
        <div className="w-full">
            <button onClick={deleteClick} className="m-2 btn btn-danger w-3/4 btnMaxWidth">Delete all quotes</button>
        </div>
    );
}

export default QuoteDelete;