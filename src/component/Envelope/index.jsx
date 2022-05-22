import {  useEffect, useState, useRef } from 'react'
import BgMusic from '../BgMusic'
import useScrollBg from '../../hooks/useScrollBg'
import Rose from '../Rose'
import './index.less'
import './animation.less'

const music = require("../../static/soft_bgm.m4a")
const img = require('../../static/enter.png')

const Envelope = (props)=>{
  const {startAction,scal,setBg} = useScrollBg()
  const {letterCompon: Letter} = props
  const [isOpen,setOpen] = useState(false)
  const [opened,setOpened] = useState(false)
  const ros = useRef(null)
  useEffect(()=>{
    if(isOpen){ startAction();scal(ros.current)}
  },[isOpen,startAction,scal])
  return (
    <>
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
                    setBg("rgb(233, 117, 30)")
                    setTimeout(()=>{
                      setOpened(true)
                    },4500)
                  }}
                />
            </div>
        </div>
        <div className={`letter-side ${isOpen ? 'letter-anim':''}`}>
          <div ref={ros} className={`letter`}>
            <Rose open={opened} disableClick/>
          </div>
        </div>
      </div>
    </div>
    {opened&&<Letter opened={opened} />}
    </>
  )
}

export default Envelope
