import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
const Home = lazy(()=> import("./components/Home"));
const About = lazy(()=> import("./pages/About"))
const Contact = lazy(()=> import("./pages/Contact"))

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Suspense fallback="loading..."><Home /></Suspense>} />
        <Route exact path="/about" element={<Suspense fallback="loading..."><About /></Suspense>} />
        <Route exact path="/contact" element={<Suspense fallback="loading..."><Contact /></Suspense>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App