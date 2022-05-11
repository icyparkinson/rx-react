// import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import WorkSpace from "./components/WorkSpace"
import NavBar from "./components/NavBar"


const App = () =>{
   return (
    <div style = {{backgroundColor: "rgb(70, 139, 230)", height: "800px"}}>
      <Router>
        <NavBar />
        <WorkSpace />
      </Router>
    </div>
  );
}

export default App;
