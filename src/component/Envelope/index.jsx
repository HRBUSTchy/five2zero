import {  useState } from 'react'
import './index.less'
import './animation.less'
const img = require('../../static/enter.png')
const Envelope = (props)=>{
  const [isOpen,setOpen] = useState(false)
  return (
    <div className="envelope">
      <div className={`wrapper-side ${isOpen ? 'wrapper-anim':''}`}>
        <div className={`top-side  ${isOpen ? 'top-anim':''}`}>
          <div className="top-side-inner"></div>
          <img className='enter' style={{display:isOpen?'none':'inline-block'}} src={img} onClick={()=>setOpen(true)}/>
        </div>
      </div>
        {/* <div>{props.letter}</div> */}
    </div>
  )
}

export default Envelope;
