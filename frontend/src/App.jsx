import { useEffect, useState } from "react";
import Filter from "./components/Filter/Filter";
import Header from "./components/Header/Header";
import RetreatDisplay from "./components/RetreatDisplay/RetreatDisplay";
import axios from "axios";

const App = () => {
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchEvents = async () => {
    const response = await axios.get(import.meta.env.
      VITE_DJANGO_API_URL);
    if(response.status === 200) {
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
      <Filter setFilteredEvents={setFilteredEvents} />
      <RetreatDisplay filteredEvents={filteredEvents}  />
    </>
  );
};

export default App;
