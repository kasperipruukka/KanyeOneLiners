import useQuotes from "../useQuotes";

const Quote = ({id, value}) => {
    const {deleteQuote} = useQuotes();

    const deleteClick = () => {
        deleteQuote({id, value});
    }

    return(
        <div id="quoteContainer" className="flex flex-row items-center justify-center">
            <svg id="svgBtn" onClick={deleteClick} className="w-1/3 justify-center svg" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
            <div id="jumbo" className="w-2/3 m-3 p-1 jumbotron jumbotron-fluid bg-gradient-to-r from-white via-sky-100 to-white">
                <div className="container flex justify-center flex-col items-center">
                    <p className="text-center w-3/5 text-lg"><i>{value}</i></p>
                </div>
            </div>
        </div>
    );
}

export default Quote;