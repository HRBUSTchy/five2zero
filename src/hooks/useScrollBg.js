
const run = ()=>{
  const startAction = ()=>{
    const R = 233
    const G = 117
    const B = 30

    const RE = 8
    const GE = -5
    const BE = 126
    window.addEventListener("scroll",(e)=>{
      const top =  document.documentElement.scrollTop || document.body.scrollTop
      const max = document.body.clientHeight
      const clss = top/max+0.15
      document.body.style.backgroundColor = `rgb(${R+RE*clss},${G+GE*clss},${B+BE*clss})`;
    })
  }

  const scal = (dom)=>{
    const subScal = 0.5
    const subOpacity = 0.5
    const subBlur = 5
    window.addEventListener("scroll",()=>{
      const viewHeight = document.documentElement.clientHeight
      const top = document.documentElement.scrollTop || document.body.scrollTop
      const clss = top/viewHeight
      if(top < viewHeight){
        dom.style.opacity = 1-subOpacity*clss
        dom.style.filter = `blur(${subBlur*clss}px)`
        dom.style.transform = `scale(${1+subScal*clss})`
      }
    })
  }

  const setBg = (color)=>{
    document.body.style.backgroundColor = color
  }
  return {startAction:startAction,setBg,scal}
}
export default run