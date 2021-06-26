import styled from "styled-components";
import { useState, useEffect } from "react";
import * as data from "../data/data.json";

const OrderPage = () => {
  //Here I get the url params
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const departure = urlParams.get("from");
  const arrival = urlParams.get("to");
  const date = urlParams.get("date");

  //Here I get every flight possible inside my data
  const flights = data.default.flight;
  const [hour, setHour] = useState();
  useEffect(() => {
    const filterFlight = flights.filter(
      (flight) => flight.departure == departure && flight.arrival == arrival
    );
    console.log(filterFlight);
    setHour(filterFlight.hour);
  }, []);

  return (
    <Container>
      <h1>1 resultat</h1>
      <Content>
        <span>
          {departure} to {arrival}
        </span>
        <span>{date}</span>
      </Content>
    </Container>
  );
};
export default OrderPage;

const Container = styled.div``;
const Content = styled.div``;
