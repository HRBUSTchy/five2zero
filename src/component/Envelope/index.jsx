import {  useState } from 'react'
import BgMusic from '../BgMusic'
import './index.less'
import './animation.less'

const music = require("../../static/soft_bgm.m4a")
const img = require('../../static/enter.png')
const Envelope = (props)=>{
  const {letterCompon: Letter} = props
  const [isOpen,setOpen] = useState(false)
  const [opened,setOpened] = useState(false)
  return (
    <div className="envelope">
      <BgMusic src = {music} play={isOpen} disableClick/>
      <div className={`background ${isOpen ? 'back-anim':''}`}></div>
      <div className='centerloc'>
        <div className={`wrapper-side ${isOpen ? 'wrapper-anim':''}`} />
        <div className={`top-wrapper ${isOpen ? 'wrapperslid-anim':''}`}>
          <div className={`top-side  ${isOpen ? 'top-anim':''}`}>
            <div className="top-side-inner"></div>
                <img className='enter'
                  alt='img'
                  style={{display:isOpen ? 'none':'inline-block'}}  
                  src={img} 
                  onClick={()=>{
                    setOpen(true);
                    setTimeout(()=>{
                      setOpened(true)
                    },4500)
                  }}
                />
            </div>
        </div>
        <div className={`letter-side ${isOpen ? 'letter-anim':''}`}>
          <div className={`letter`}>
            <Letter opened={opened} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Envelope
