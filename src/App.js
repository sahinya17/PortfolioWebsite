import BackgroundAnimation from "./components/Background/BackgroundAnimation";
import {BrowserRouter as Router, Routes, RouterProvider, Route, Link} from 'react-router-dom'
import Home from "./components/Home/Home";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Error from "./components/Error/Error";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";

const App = () => {

  return (
    <Router>
      {/* <BackgroundAnimation /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/education" element={<Education/>} />
        <Route path="/experience" element={<Experience/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />

        <Route path="*" element={<Error/>}/>
      </Routes>
      <div>Footer</div>
    </Router>
    
  );
};

export default App
