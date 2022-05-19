import Rose from './component/Rose'
import BgMusic from './component/BgMusic'
import Envelope from './component/Envelope'
import './App.css';

const music = require("./static/soft_bgm.m4a")
function App() {
  return (
    <div className="App">
      <Envelope letter={(
        <BgMusic src = {music}>
          <Rose />
        </BgMusic>)}
      />
    </div>
  );
}

export default App;
