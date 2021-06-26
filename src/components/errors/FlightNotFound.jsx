import styled from "styled-components";
const FlightNotFound = () => {
  return (
    <Container>
      <Title>Aucun vols trouvés</Title>
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
