import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import PollutantsPage from "./page/PollutantsPage";
import ObjectsPage from "./page/ObjectsPage";
import Navbar from "./component/Navbar";

function App() {
    return (
        <Router>
            <div>
                <Navbar/>
                <div className="container mt-4">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/pollutants" element={<PollutantsPage />} />
                        <Route path="/objects" element={<ObjectsPage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
