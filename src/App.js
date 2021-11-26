import './App.css';
import LeftColumn from './components/LeftColumn';
import MidColumn from './components/MidColumn';
import  RightColumn from "./components/RightColumn";

function App() {
  return (
    <div className={`App`}>
      <div class="row">
        <LeftColumn></LeftColumn>
        <MidColumn></MidColumn>
         <RightColumn></RightColumn>
      </div>
    </div>

  );
}

export default App;
