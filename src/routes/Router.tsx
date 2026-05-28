import { Routes, Route } from "react-router";
import Home from "../pages/home/Home";
import Characters from "../pages/characters/Characters";
import Episodes from "../pages/episodes/Episodes";
import Locations from "../pages/locations/Locations";

export default function Router(){
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/characters" element={<Characters />}/>
            <Route path="/episodes" element={<Episodes />}/>
            <Route path="/locations" element={<Locations />}/>
        </Routes>
    )
}