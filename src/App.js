import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import WorkSpace from "./components/WorkSpace"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import DayCalc from "./components/DayCalc"
import Vaccine from "./components/Vaccine"
import Abx from "./components/Abx"


const App = () =>{
   return (
    <Router>
      <NavBar />
      <Routes>
          <Route exact path = "/" element = {<Home/>} />
          <Route path = "/daycalc" element = {<DayCalc/>} />
          <Route path = "/vaccine" element = {<Vaccine />} />
          <Route path = "/abx" element = {<Abx />} />
      </Routes>
    </Router>
  );
}

export default App;
