import useQuotes from "../useQuotes";

const Filter = () => {
    const {setSearchWord, searchWord} = useQuotes();

    return(
        <div>
            <label htmlFor="filter" className="form-label text-lg">Word count filter:</label>
            <input onChange={(e) => setSearchWord(e.target.value)} id="filter" className="form-control text-xl text-center" type="number" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } value={searchWord} />
        </div>
    );
}

export default Filter;