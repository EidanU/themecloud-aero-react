import * as data from "../data/data.json";
import FlightNotFound from "../components/errors/FlightNotFound";
import FlightCard from "../components/FlightCard";
import getUrl from "../services/getUrl";

const OrderPage = () => {
  let filterFlight;
  let flightData;
  const flights = data.default.flight;
  const { departure, arrival, date } = getUrl();

  filterFlight = flights.filter(
    (flight) => flight.departure == departure && flight.arrival == arrival
  )[0];

  if (filterFlight) {
    flightData = filterFlight;
    return <FlightCard data={{ ...flightData, date }} />;
  } else {
    return <FlightNotFound />;
  }
};
export default OrderPage;
