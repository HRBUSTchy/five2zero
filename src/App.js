import Rose from './component/Rose'
import BgMusic from './component/BgMusic'
import './App.css';

const music = require("./static/soft_bgm.m4a")
function App() {
  return (
    <div className="App">
      <BgMusic src = {music}>
        <Rose />
      </BgMusic>
    </div>
  );
}

export default App;
