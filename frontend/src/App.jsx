import { useState } from "react";
import { retreatList } from "../lib/data";
import Filter from "./components/Filter/Filter";
import Header from "./components/Header/Header";
import RetreatDisplay from "./components/RetreatDisplay/RetreatDisplay";

const App = () => {
  const [filteredEvents, setFilteredEvents] = useState(retreatList);

  return (
    <>
      <Header />
      <Filter setFilteredEvents={setFilteredEvents} />
      <RetreatDisplay filteredEvents={filteredEvents}  />
    </>
  );
};

export default App;
