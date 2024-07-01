import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Marquees from "./components/Marquees";
import SocialMedia from "./components/SocialMedia";
import GoToTop from "./components/GoToTop";
const Home = lazy(()=> import("./pages/Home"));
const About = lazy(()=> import("./pages/About"))
const Contact = lazy(()=> import("./pages/Contact"))
const Teachers = lazy(()=> import("./pages/Teachers"))

const App = () => {
  return (
    <Router>
      <Marquees />
      <GoToTop />
      <Navbar />
      <SocialMedia />
      <Routes>
        <Route exact path="/" element={<Suspense fallback="loading..."><Home /></Suspense>} />
        <Route exact path="/about" element={<Suspense fallback="loading..."><About /></Suspense>} />
        <Route exact path="/contact" element={<Suspense fallback="loading..."><Contact /></Suspense>} />
        <Route exact path="/our_teachers" element={<Suspense fallback="loading..."><Teachers /></Suspense>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App