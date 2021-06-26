import { useState, useEffect } from "react";
import * as data from "../data/data.json";

import FlightCard from "../components/FlightCard";
import getUrl from "../services/getUrl";

const OrderPage = () => {
  let filterFlight;
  const flights = data.default.flight;
  const [userFlight, setUserFlight] = useState(getUrl);

  //Here I can use a map() method if there is more data in filterFlight, but in this project set only the index [0] will work
  filterFlight = flights.filter(
    (flight) =>
      flight.departure == userFlight.departure &&
      flight.arrival == userFlight.arrival
  )[0];
  let hours = filterFlight.hours;

  return <FlightCard data={{ ...userFlight, hours }} />;
};
export default OrderPage;
