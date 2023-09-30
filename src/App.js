// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import Pollutants from "./component/pollutants/Pollutants";


function App() {
  return (
    <div>
        <Router>
            <Routes>
                <Route>
                    <Route path="/" element={
                        <HomePage/>
                    }/>
                    <Route path="/pollutants" element={
                        <Pollutants/>
                    }/>
                </Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
