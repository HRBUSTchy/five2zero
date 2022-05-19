import { useCallback, useRef, useState } from "react";
import './index.less';
const Music = (props) => {
  const BGM = useRef(null)
  const [playing,setPlay] = useState(false)
  
  const handleChildClick = useCallback(()=>{
    if(!BGM.current){
      BGM.current = new Audio();
      BGM.current.src = props.src;
      BGM.current.loop=true;
      BGM.current.play()
      setPlay(true)
    }
  },[props.src])

  const handleControl = useCallback((playing)=>{
    const {current:bgm} = BGM
    console.log(BGM)
    if(playing){
      bgm.pause()
      setPlay(false)
    }else{
      bgm.play()
      setPlay(true)
    }
  },[])

  return (
  <div className="bg-music"
    onClick={handleChildClick}>
    {props.children}
    <div className="controller"
      onClick={()=>handleControl(playing)}>
      {BGM.current&&(playing? 
      <i className="iconfont icon-zanting-m"></i>
      :<i className="iconfont icon-bofang-m"></i>)}
    </div>
  </div>
  )
}

export default Music