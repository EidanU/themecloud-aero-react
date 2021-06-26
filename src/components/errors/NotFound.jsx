import styled from "styled-components";
const NotFound = () => {
  return (
    <Container>
      <Title>404 not Found</Title>
    </Container>
  );
};

export default NotFound;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: #e5e5e5;
`;
const Title = styled.h1`
  margin: auto;
`;
