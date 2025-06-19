import { Container } from './components/Container';
import { CountDown } from './components/CountDown';
import { Cycles } from './components/Cycles';
import { Input } from './components/Input';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import './styles/global.css';
import './styles/theme.css';

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
        <form className='form' action=''>
          <div className='formRow'>
            <Input
              LabelText='Task'
              id='MeuInput'
              type='text'
              title='name'
              placeholder='Digite Alguma coisa'
            />
          </div>
          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className='formRow'>
            <Cycles />
          </div>
          <div className='formRow'>
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}

export default App;
