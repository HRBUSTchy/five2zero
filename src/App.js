import Artical from "./component/Article"
import Envelope from './component/Envelope'
import './App.css';
import './global/style/index.less'

function App() {
  return (
    <div className="App">
      <Envelope letterCompon={Artical}/>
    </div>
  );
}

export default App;
