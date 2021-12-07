import styled from "styled-components";
import Circle from "./Circle";
import Form from "./From";

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
`;

const H1 = styled.h1`
  color: ${props => props.theme.textColor};
`;
function App() {
  return (
    <Container>
      <H1>protect</H1>
    </Container>
  );
}

export default App;
