import React from 'react'
import Bandeau from '../../component/bandeau/bandeau';
import image from '../../img/background-apropos.png'
import Dropdown from '../../component/dropdowns/dropdown';
function Apropos() {

   
  

    return (
        <div>
            <div>
                <Bandeau title={""} background={image}/>
            </div>
            <div>
                <Dropdown/>
            </div>
        </div>


    )
}

export default Apropos