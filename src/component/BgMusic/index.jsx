import { useCallback, useRef, useState, useEffect } from "react";
import './index.less';
const Music = (props) => {
  const BGM = useRef(null)
  const [playing,setPlay] = useState(false)
  const [isFirst,setFirst] = useState(true)

  useEffect(() => {
    BGM.current = new Audio();
    BGM.current.src = props.src;
    BGM.current.preload = true;
    BGM.current.loop=true;
  }, [props.src])

  const handleChildClick = useCallback((event)=>{
    if(isFirst&&!props.disableClick){
      BGM.current.play()
      setPlay(true)
      setFirst(false)
    }
  },[isFirst,props.disableClick])

  useEffect(()=>{
    if(isFirst&&props.play){
      BGM.current.play()
      setPlay(true)
      setFirst(false)
    }
  },[props.play,isFirst])

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
      {!isFirst&&(playing ?
      <i className="iconfont icon-zanting-m"></i>
      :<i className="iconfont icon-bofang-m"></i>)}
    </div>
  </div>
  )
}

export default Music
