const Filter = () => {
    const changeFilter = (e) => {
        console.log(e.target.value);
    };
    return(
        <div>
            <label htmlFor="filter" className="form-label text-lg">Word count filter:</label>
            <input id="filter" className="form-control text-xl" onChange={changeFilter} type="text" />
        </div>
    );
}

export default Filter;