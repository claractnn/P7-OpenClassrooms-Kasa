import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Error from '../../pages/Error';
import Accomodation from '../../pages/Accomodation';

function AllRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/error" element={<Error />} />
                <Route exact path="/accomodation" element={<Accomodation />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AllRoutes;