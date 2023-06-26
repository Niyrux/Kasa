import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import locationsData from '../../location.json';
import './slider.css'
import arrowLeft from '../../img/arrow-left.png'
import arrowRight from '../../img/arrow-right.png'
function Slider() {
    const { id } = useParams();
    const location = locationsData.find(l => l.id === id);
    const [current, setCurrent] = useState(0);
    const imagesSlider = location.pictures;
    
    const image = imagesSlider.map((img, index) => {
        return <div key={index} className={index === current ? 'slide active' : 'slide'}>
            {index === current && (<img alt='appartement' className='image' src={img} />)
            }
          
        </div>
    }

    )
    
   const length = image.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        
        setCurrent(current === 0 ? length - 1 : current - 1)
    }


    if (!location) {
        return ' ';
    }


    return (
       <section className="containerSlide">
  {length > 1 ? (
    <>
      <img className="arrow-right" alt='arrow-right' src={arrowRight} onClick={nextSlide} />
      <img className="arrow-left" alt='arrow-left' src={arrowLeft} onClick={prevSlide} />
    </>
  ) : null}
  {image}
  <div className='count'>{current +1 }/{length }</div>
</section>
    )
}

export default Slider