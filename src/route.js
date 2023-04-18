import { Routes, Route } from "react-router-dom";
import Bandeau from "./component/bandeau/bandeau"
import Location from './component/location/location';
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
            </Routes>
        </div>
    )
}

export default MyRoute