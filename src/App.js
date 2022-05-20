import Artical from "./component/Article"
import Envelope from './component/Envelope'
import BackGround from "./component/BackGround";
import './App.css';
import './global/style/index.less'

function App() {
  return (
    <div className="App">
      <Envelope letterCompon={Artical}/>
      <BackGround/>
    </div>
  );
}

export default App;
