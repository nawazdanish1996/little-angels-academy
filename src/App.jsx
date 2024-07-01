import { HashRouter, Routes, Route } from "react-router-dom";
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
    <HashRouter>
      <Marquees />
      <GoToTop />
      <Navbar />
      <SocialMedia />
      <Routes>
        <Route path="/" element={<Suspense fallback="loading..."><Home /></Suspense>} />
        <Route path="/about" element={<Suspense fallback="loading..."><About /></Suspense>} />
        <Route path="/contact" element={<Suspense fallback="loading..."><Contact /></Suspense>} />
        <Route path="/our_teachers" element={<Suspense fallback="loading..."><Teachers /></Suspense>} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default App