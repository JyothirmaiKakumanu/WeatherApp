import logo from './logo.svg';
import './App.css';
import Forecast from './components/Forecast';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
      </header>
      <main>
        <Forecast />
      </main>
      <footer>
        Create by Jyothirmai
      </footer>
    </div>
  );
}

export default App;
