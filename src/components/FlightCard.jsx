import styled from "styled-components";

const FlightCard = ({ data }) => {
  console.log(data);
  return (
    <Container>
      <Content>
        <p>1 resultat</p>
        <DataContainer>
          <div>
            <b>
              {data.departure} to {data.arrival}
            </b>
          </div>
          <div>
            {data.date} {data.hours.start} - {data.date} {data.hours.end}
          </div>
          <div>
            <b>{data.price}</b>
          </div>
          <StyledButton>Reserver</StyledButton>
        </DataContainer>
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
const DataContainer = styled.div`
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
