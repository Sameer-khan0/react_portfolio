import React from 'react'
import image0 from '../../../assets/img/crown.png'
import image1 from '../../../assets/img/thumbup.png'
import './Container.css'

function Container(props) {
  return (
    <div className='info-con-form' style={{width:props.width}}>
      <img src={props.img==='thum'?image1:image0} alt="img" />
      <div className="con-msg">
      {props.msg}
      </div>
    </div>
  )
}

export default Container
