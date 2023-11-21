import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import PollutantsPage from "./page/PollutantsPage";
import ObjectsPage from "./page/ObjectsPage";
import Navbar from "./component/Navbar";
import EmergencyPage from "./page/EmergencyPage";

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
                        <Route path="/emergencies" element={<EmergencyPage />} />
                    </Routes>
                </div>
                <footer className="bg-dark text-light text-center p-3">
                    &copy; Copyright 2023 Nikita Malov and Nikita Mazurenko
                </footer>
            </div>
        </Router>
    );
}

export default App;
