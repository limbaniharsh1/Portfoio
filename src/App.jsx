import './App.css';
import Details from './Components/Details';
import Header from './Components/Header';
import Person from './Components/Person';

function App() {
  return (
    <div className="App">
      <div className="box">
        <Header/>
        <Person/>
        <Details/>
      </div>
    </div>
  );
}

export default App;
