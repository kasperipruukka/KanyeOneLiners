import useQuotes from "../useQuotes";

const QuoteDelete = () => {
    const {deleteAllQuotes} = useQuotes();

    const deleteClick = () => {
        deleteAllQuotes();
    }

    return(
        <div className="w-full">
            <button onClick={deleteClick} className="md:m-2 sm:w-11/12 md:w-3/4 btn btn-danger">Delete all quotes</button>
        </div>
    );
}

export default QuoteDelete;