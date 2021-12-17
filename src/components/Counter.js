import useQuotes from "../useQuotes";

const Counter = () => {
    const {totalCount} = useQuotes();

    return(
        <div>
            <p>Total quote count: {totalCount}</p>
            <p>Quotes in view: 2</p>
        </div>
    );
}

export default Counter;