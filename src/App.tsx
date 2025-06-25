import './styles/global.css';
import './styles/theme.css';
import Home from './pages/home/index';
import { TaskContextProvider } from './contexts/TaskContext/taskContextProvider';

function App() {
  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}

export default App;
