import useQuotes from "../useQuotes";

const Quote = ({id, value}) => {
    const {deleteQuote, fadeOutEffect} = useQuotes();

    const deleteClick = (e) => {
        deleteQuote({id, value});
    }

    return(
        <div className="singleQuote m-3 p-1 jumbotron jumbotron-fluid bg-gradient-to-r from-white via-sky-100 to-white hover:cursor-pointer">
            <div className="container flex justify-center">
                <p onClick={deleteClick} className="text-center w-3/5 text-lg"><i>{value}</i></p>
            </div>
        </div>
    );
}

export default Quote;