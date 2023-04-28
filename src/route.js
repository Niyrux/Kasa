import { Routes, Route } from "react-router-dom";
import Fiabilite from "./component/dropdowns/dropdown";
import LocationSingle from "./pages/location/location";
import NotFound from "./component/404/404";
import Home from "./pages/home/home";
import Apropos from "./pages/apropos/apropos";
import './index.css'
function MyRoute() {
    return (
        <div className="Route">
            <Routes>
                <Route path='/' element={<Home />} />

                <Route path='/location/:id' element={<LocationSingle />}></Route>
                <Route path='/a-propos' element={<Apropos />}></Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default MyRoute