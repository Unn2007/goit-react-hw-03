function SearchBox({ searchFieldValue, updateSearch }) {
 
  return (
    <div>
      <label htmlFor="search">Find contacts by name</label>

      <input
        id="search"
        type="text"
        name="search"
        value={searchFieldValue}
        onChange={(event)=>updateSearch(event.target.value)}
      />
    </div>
  );
}

export default SearchBox;
