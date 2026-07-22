import { Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";

import Home from "@/components/sections/Home/Home";
import Projects from "@/components/sections/Projects/Projects";
import About from "@/components/sections/About/About";
import Contact from "@/components/sections/Contact/Contact";


const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};


export default App;