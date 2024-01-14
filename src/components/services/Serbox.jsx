import React from 'react'
import {motion } from 'framer-motion'

function Serbox(props) {
  return (
    <motion.div
    initial={{x:`${props.transition}`}}
    whileInView={{x:'0rem'}}
    transition={{duration:1,type:'spring'}}
    className='ser-box'>
      <div className="ser-logo">
        {props.logo}
      </div>
      <h3 className='ser-name'e>{props.name}</h3>
      <div className="ser-desc">
        {props.desc}
      </div>
    </motion.div>
  )
}

export default Serbox
