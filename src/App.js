import logo from './logo.svg';
import './App.css';
// import MainPoster from './components/MainPoster';
import MainPoster from "./components/MainPoster";
import MidColumn from './components/MidColumn';


function App() {
  return (
    <div className={`App`}>
      <div class="row">
        <div class="col">
          Column
        </div>
        <MidColumn></MidColumn>
        <div class="col">
          Column
    </div>
      </div>
    </div>

  );
}

export default App;
