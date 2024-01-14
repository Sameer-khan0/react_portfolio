import React, { useContext } from 'react';
import './skillsize.css';
import { motion } from 'framer-motion';
import { themeContext } from '../../../Context';

function Basicskl(props) {
const nightmode=useContext(themeContext)
const {isNightMode}=nightmode

  return (
    <motion.div
      initial={{ left: '1.5rem', scale: 1.02,}}
      whileInView={{ left: '0rem', scale: 1,}}
      whileHover={{scale:1.1}}
      transition={{ duration: 1, type: 'spring' }}
      className='skillbox'
      style={{background:`${isNightMode?'Transparent':'rgb(255 255 255)'}`}}
    >
      <div className="skillico">{props.icon}</div>
      <div className="skillname">{props.name}</div>
      <div className='progress' style={{ width: `${props.progress}%` }}>
        {props.progress}%
      </div>
    </motion.div>
  );
}

export default Basicskl;
