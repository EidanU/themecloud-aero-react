import * as data from "../data/data.json";
import FlightNotFound from "../components/errors/FlightNotFound";
import FlightCard from "../components/FlightCard";
import getUrl from "../services/getUrl";

const FlightPage = () => {
  let filterFlight;
  //const flights correspond to flights from the JSON file
  const flights = data.default.flight;
  // Here I get every const from my function getUrl(), those const correspond to the url params
  const { departure, arrival, date } = getUrl();

  //Here I filter all the flight I have in my data to find the one that correspond to my url params.
  //For a bigger project I should use a .map() to display all my data but here I just take the element at the index [0].
  filterFlight = flights.filter(
    (flight) => flight.departure === departure && flight.arrival === arrival
  )[0];

  if (filterFlight) {
    return <FlightCard data={{ ...filterFlight, date }} />;
  } else {
    return <FlightNotFound />;
  }
};
export default FlightPage;
