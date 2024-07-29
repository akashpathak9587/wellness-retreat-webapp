import { useState } from "react";
import "./SearchFilter.css";
const SearchFilter = ({filterBySearch}) => {
  const [searchText, setSearchText] = useState("");

  const onChange = (e) => {
      setSearchText(e.target.value);
      filterBySearch(e.target.value);
  };

  return (
    <div className="search-filter">
      <input type="text" value={searchText} onChange={onChange} placeholder="Filter By Title" />
    </div>
  );
};

export default SearchFilter;
