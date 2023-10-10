import './App.css'
import { Routes, Route } from "react-router-dom";
import Landing from "./views/landing"
import Home from "./views/home"
import Detail from "./views/detail"
import Form from "./views/form"
import Error from "./views/error"


function App() {

  return (
      <div>
        <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="/activityForm" element={<Form/>}/>
        <Route path="*" element= {<Error/>}/>
        </Routes>
      </div>
  )
};

export default App
