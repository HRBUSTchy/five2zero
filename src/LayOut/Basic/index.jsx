import './index.less'
const BasicLayOut = (props)=>{
  return (
    <div className="basic-layout">
      <div className="content">
        {props.children}
      </div>
    </div>
  )
}

export default BasicLayOut;