import styled from "styled-components";

//Here is the page for flight not found, the different with the 404 is that she will be displays only with the url /flight/trip
const FlightNotFound = () => {
  return (
    <Container>
      <Title>Sorry, we didn't find any flight</Title>
    </Container>
  );
};

export default FlightNotFound;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: #e5e5e5;
`;
const Title = styled.h1`
  margin: auto;
`;
