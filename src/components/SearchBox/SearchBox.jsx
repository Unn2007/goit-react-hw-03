import css from "./SearchBox.module.css";
import PropTypes from "prop-types";

function SearchBox({ searchFieldValue, updateSearch }) {
  return (
    <div className={css.search}>
      <label htmlFor="search">Find contacts by name</label>

      <input
        id="search"
        type="text"
        name="search"
        value={searchFieldValue}
        onChange={(event) => updateSearch(event.target.value)}
      />
    </div>
  );
}

export default SearchBox;

SearchBox.propTypes = {
  searchFieldValue: PropTypes.string.isRequired,
  updateSearch: PropTypes.func.isRequired,
};
