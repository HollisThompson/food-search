const SearchForm = (props)=>{
    return(
    <form className="search-form" onSubmit={props.updateQuery}>
        <input className="search-bar"type="text" value={props.search} onChange={props.updateSearch}/>
        <button  className="search-button" type="sumbit">
          Search
        </button>
    </form>
)};

export default SearchForm;