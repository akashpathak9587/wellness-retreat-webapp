import { useCallback, useEffect, useState } from "react";
import Filter from "./components/Filter/Filter";
import Header from "./components/Header/Header";
import RetreatDisplay from "./components/RetreatDisplay/RetreatDisplay";
import axios from "axios";

const App = () => {
  const [allEvents, setAllEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchEvents = async () => {
    const response = await axios.get(import.meta.env.
      VITE_DJANGO_API_URL);
    if (response.status === 200) {
      setAllEvents(response.data);
      setFilteredEvents(response.data);
    }
    setIsLoading(false);
  }
  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <>
      {isLoading && <p className="loading">Loading...</p>}
      <Header />
      <Filter setFilteredEvents={setFilteredEvents} filteredEvents={filteredEvents} allEvents={allEvents} />
      <RetreatDisplay filteredEvents={filteredEvents} allEvents={allEvents}  />
    </>
  );
};

export default App;
