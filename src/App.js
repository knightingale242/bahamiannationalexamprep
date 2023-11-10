import logo from './logo.svg';
import './App.css';
import Routing from './components/Routes/Routes';
import NavBar from './components/navBar/navBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routing />
    </div>
  );
}

export default App;
