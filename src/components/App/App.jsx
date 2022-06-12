import Container from "../Container/Container";
import Header from "../Header/Header";
import HeaderWrapper from "../Header/HeaderWrapper/HeaderWrapper";
import Hero from "../Hero/Hero";
import HeroBackground from "../Hero/HeroBackground/HeroBackground";
import OurUsers from "../OurUsers/OurUsers";
import NewUser from "../NewUser/NewUser";

function App() {
  return (
    <>
      <HeaderWrapper>
        <Container>
          <Header />
        </Container>
      </HeaderWrapper>
      <HeroBackground>
        <Container>
          <Hero />
        </Container>
      </HeroBackground>
      <Container>
        <OurUsers />
      </Container>
      <Container>
        <NewUser />
      </Container>
    </>
  );
}

export default App;
