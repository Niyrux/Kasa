import React from 'react'
import Bandeau from '../../component/bandeau/bandeau';
import Location from '../../component/location-boucle/location';
import image from '../../assets/img/background-sombre.png'
function Home() {




    return (
        <div>
            <Bandeau title={"Chez vous, partout et ailleurs"} background={image} />
            <Location />
        </div>


    )
}

export default Home