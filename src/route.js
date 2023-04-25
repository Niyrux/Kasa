import { Routes, Route } from "react-router-dom";
import Bandeau from "./component/bandeau/bandeau"
import Fiabilite from "./component/dropdowns/fiabilite";
import Location from './component/location-boucle/location';
import LocationSingle from "./component/location-single/location-single";
import NotFound from "./component/404/404"
import Slider from "./component/slider/slider";
import Home from "./pages/home/home";
import './index.css'
function MyRoute() {
    return (
        <div className="Route">
            <Routes>
                <Route path='/' element={<Home /> } />

                <Route path='/location/:id' element={
                    <>
                        
                    </>
                }></Route>
                <Route path='/a-propos' element={
                    <>
                        <Fiabilite />
                    </>
                }></Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default MyRoute