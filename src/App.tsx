import { Container } from './components/Container';
import { CountDown } from './components/CountDown';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import './styles/global.css';
import './styles/theme.css';
import { DefaultForm } from './components/DefaultForm/Index';
import { Footer } from './components/Footer';
function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <DefaultForm />
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  );
}

export default App;
