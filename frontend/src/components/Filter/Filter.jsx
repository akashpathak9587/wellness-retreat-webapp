import FilterByDate from "../FilterByDate/FilterByDate";
import "./Filter.css";
import { retreatList } from "../../../lib/data";
import TypeFilter from "../TypeFilter/TypeFilter";
import SearchFilter from "../SearchFilter/SearchFilter";

const Filter = ({ setFilteredEvents }) => {
    const filterByDate = (start, end) => {
        const events = retreatList.filter((event) => {
            const eventDate = new Date(event.date * 1000);
            return eventDate >= start && eventDate <= end;
        })
        setFilteredEvents(events);
    }
    const filterByType = (type) => {
        const events = retreatList.filter((event) => {
            return event.tag.includes(type);
        })
        setFilteredEvents(events);
    }

    const filterBySearch = (text) => {
        const events = retreatList.filter((event) => {
            return event.title.toLowerCase().includes(text.toLowerCase());
        })
        setFilteredEvents(events);
    }

  return (
    <div className="filter">
          <FilterByDate filterByDate={filterByDate}/>
          <TypeFilter filterByType={filterByType} />
          <SearchFilter filterBySearch={filterBySearch} />
    </div>
  );
};

export default Filter;
