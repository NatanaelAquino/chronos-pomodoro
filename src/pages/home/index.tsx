import { Container } from '../../components/Container';
import { CountDown } from '../../components/CountDown';
import { DefaultForm } from '../../components/DefaultForm/Index';
import MainTemplate from '../../templates/MainTemplate';
function Home() {
  return (
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <DefaultForm />
      </Container>
    </MainTemplate>
  );
}

export default Home;
