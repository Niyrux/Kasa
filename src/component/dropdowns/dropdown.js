import React, { useState } from 'react';
import image from '../../img/arrow.png';
import './dropdown.css';

function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };
  

  return (
    <div className="container-dropdown">
      <div className="drop-down-top" onClick={handleDropdownToggle}>
        <p>{props.title}</p>
        <img className='arrow-move' alt='arrow' src={image} />
      </div>
      {isOpen && <div className="drop-down-bot"><p>{props.content}</p></div>}
    </div>
  );
}

export default Dropdown;
