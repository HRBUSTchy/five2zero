import Rose from '../Rose'
import Paper from '../Paper';

const Artical = (props)=>{
  return(
    <div className='artical'>
      <Rose open={props.opened} disableClick/>
      <Paper className=""></Paper>
    </div>
  );
}

export default Artical