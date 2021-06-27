import styled from "styled-components";

//In this component I display every information about the flight
const FlightCard = ({ data }) => {
  return (
    <Container>
      <Content>
        <p>1 resultat</p>
        <Card>
          <div>
            <b>{data.airport}</b>
          </div>
          <div>
            {data.date} {data.hours.start} - {data.date} {data.hours.end}
          </div>
          <div>
            <b>{data.price}</b>
          </div>
          <StyledButton>Reserver</StyledButton>
        </Card>
      </Content>
    </Container>
  );
};
export default FlightCard;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: #e5e5e5;
`;
const Content = styled.div`
  margin: auto;
  padding: 3%;
  background: white;
  min-width: 10%;
  width: 20%;
`;
const Card = styled.div`
  padding: 3%;
  margin: auto;
  background: white;
  text-align: center;
  border: solid 1px;
`;

const StyledButton = styled.button`
  background: #e5e5e5;
  border: none;
  border-radius: 2px;
  margin-top: 3%;
  height: 30px;
`;
