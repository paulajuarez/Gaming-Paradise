import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemList from './components/ItemList/ItemList';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <ItemList greetings="¡Bienvenidos a Game Paradise!"></ItemList>
      </div>
    </>
  );
}

export default App;
