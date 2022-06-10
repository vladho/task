import Container from "../Container/Container";
import Header from "../Header/Header";
import HeaderWrapper from "../Header/HeaderWrapper/HeaderWrapper";

function App() {
  return (
    <>
      <HeaderWrapper>
        <Container>
          <Header></Header>
        </Container>
      </HeaderWrapper>
    </>
  );
}

export default App;
