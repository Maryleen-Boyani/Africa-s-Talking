import Registration from "./../src/Pages/Registration";
import HomePage from "./Pages/HomePage";
import About from "./Components/About";
import Volunteer from "./Pages/Volunteer"
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/volunteer" element={<Volunteer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
