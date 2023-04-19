import { Routes, Route } from "react-router-dom";
import Bandeau from "./component/bandeau/bandeau"
import Fiabilite from "./component/dropdowns/fiabilite";
import Location from './component/location/location';
import LocationSingle from "./component/location-single/location-single";
import './index.css'
function MyRoute() {
    return (
        <div className="Route">
            <Routes>
                <Route path='/' element={
                    <>
                        <Bandeau />
                        <Location />
                    </>
                } />
                <Route path='/location/:id' element={
                    <>
                        <LocationSingle />
                    </>
                }></Route>
                <Route path='/a-propos' element={
                    <>
                        <Fiabilite />
                    </>
                }></Route>
            </Routes>
        </div>
    )
}

export default MyRoute