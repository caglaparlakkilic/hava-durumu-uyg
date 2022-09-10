import './App.css';
import Container from './components/Container';
import Select from './components/Select';
import {WeatherProvider} from './context/WeatherContext';


function App() {
  return (
      <WeatherProvider>
        <Select />
        <Container />
      </WeatherProvider>
  );
}

export default App;
