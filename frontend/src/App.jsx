import { useEffect, useState } from "react";
import { retreatList } from "../lib/data";
import Filter from "./components/Filter/Filter";
import Header from "./components/Header/Header";
import RetreatDisplay from "./components/RetreatDisplay/RetreatDisplay";
import axios from "axios";

const App = () => {
  const [filteredEvents, setFilteredEvents] = useState([]);
  const fetchEvents = async () => {
    const response = await axios.get('https://wellness-retreat-webapp-api.onrender.com/api/retreats/')
    if(response.status === 200) {
      setFilteredEvents(response.data);
    }

  }
  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <>
      <Header />
      <Filter setFilteredEvents={setFilteredEvents} />
      <RetreatDisplay filteredEvents={filteredEvents}  />
    </>
  );
};

export default App;
