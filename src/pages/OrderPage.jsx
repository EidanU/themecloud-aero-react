import styled from "styled-components";

const OrderPage = () => {
  //Here I get the url params
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const from = urlParams.get("from");
  const to = urlParams.get("to");
  const date = urlParams.get("date");
  return (
    <Container>
      <h1>1 resultat</h1>
      <Content>
        <span>
          {from} to {to}
        </span>
        <span>{date}</span>
      </Content>
    </Container>
  );
};
export default OrderPage;

const Container = styled.div``;
const Content = styled.div``;
