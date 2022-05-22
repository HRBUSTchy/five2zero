import Paper from '../Paper';
import './index.less'

const Artical = (props)=>{
  
  return(
    <div className='artical'>
      <div className={`content guide-anim ${props.opened?'guide-anim':'22'}`}>
        <Paper /> 
      </div>
    </div>
  );
}

export default Artical