import React, { useState, useRef } from 'react';
import image from '../../assets/img/arrow.png';
import './dropdown.css';

function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef(null);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
    if (arrowRef.current) {
      arrowRef.current.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
    }
  };

  return (
    <div className="container-dropdown">
      <div className="drop-down-top" onClick={handleDropdownToggle}>
        <p>{props.title}</p>
        <img
          className="arrow-move"
          alt="arrow"
          src={image}
          ref={arrowRef}
        />
      </div>
      {isOpen && <div className="drop-down-bot" style={{ backgroundColor: '#F6F6F6' }}><p>{props.content}</p></div>}
    </div>
  );
}

export default Dropdown;
