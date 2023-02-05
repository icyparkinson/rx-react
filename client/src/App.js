import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import WorkSpace from "./components/ui/WorkSpace"
import NavBar from "./components/ui/NavBar"




const App = () =>{


   return (
    <div style = {{backgroundColor: "#1f7a8c", height: "100vh"}}>
      <Router>
        <NavBar style = {{padding: "0", margin: "0"}} />
        <WorkSpace />
      </Router>
    </div>
  );
}

export default App;
