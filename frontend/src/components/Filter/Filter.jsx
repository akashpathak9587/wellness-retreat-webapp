import FilterByDate from "../FilterByDate/FilterByDate";
import "./Filter.css";
import { retreatList } from "../../../lib/data";
import TypeFilter from "../TypeFilter/TypeFilter";
import SearchFilter from "../SearchFilter/SearchFilter";

const Filter = ({ setFilteredEvents, filteredEvents, allEvents }) => {
    const filterByDate = (start, end) => {
        if (!start || !end) {
            setFilteredEvents(allEvents);
            return;
        }
        const startDate = new Date(start).getTime();
        const endDate = new Date(end).getTime();
        const events = allEvents.filter((event) => {
            const eventDate = new Date(event.date).getTime();
            return eventDate >= startDate && eventDate <= endDate;
        })
        setFilteredEvents(events);
    }
    const filterByType = (type) => {
        if (type === '') {
            setFilteredEvents(allEvents);
            return
        }
        const events = allEvents.filter((event) => {
            return event.tag.includes(type);
        })
        setFilteredEvents(events);
    }

    const filterBySearch = (text) => {
        const events = allEvents.filter((event) => {
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
