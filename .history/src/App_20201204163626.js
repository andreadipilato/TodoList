import logo from './logo.svg';
import './App.css';
import Cerca from './Cerca.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Lista Spesa</h3>
        <Cerca onInputSearch = {}/>
      </header>
    </div>
  );
}

export default App;
