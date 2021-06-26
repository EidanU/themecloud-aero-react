import styled from "styled-components";

const FlightCard = ({ data }) => {
  console.log(data);
  return (
    <Container>
      <h1>1 resultat</h1>
      <Content>
        <span>
          {data.departure} to {data.arrival}
        </span>
        <span>
          {data.date} {data.hours.start} - {data.date} {data.hours.end}
        </span>
      </Content>
    </Container>
  );
};
export default FlightCard;

const Container = styled.div``;
const Content = styled.div``;
