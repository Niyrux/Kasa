import { Routes, Route } from "react-router-dom";
import Bandeau from "./component/bandeau/bandeau"
import Location from './component/location/location';
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
                <Route path='location/:id' element={
                    <>
                    </>
                }></Route>
            </Routes>
        </div>
    )
}

export default MyRoute