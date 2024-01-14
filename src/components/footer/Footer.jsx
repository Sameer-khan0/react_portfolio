// Footer.jsx
import React, { useContext } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './footer.css';
import { themeContext } from '../../Context';

function Footer() {
  const nightmood = useContext(themeContext)
  const {isNightMode}=nightmood
  const style={'background':`${isNightMode?'black':'white'}`,'color':`${isNightMode?'white':'black'}`}

  return (
    <div className='footerpage'style={style} >
      <div className="footercontent" >
        <div className="footerdata">
        <div className="social-links" style={{'background':'transparent'}}>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon-f" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon-f" />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="icon-f" />
          </a>
        </div>
        <p>&copy; 2024 @Sameer Portfolio. All rights reserved.</p>
      </div>
      </div>
    </div>
  );
}

export default Footer;
