// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import ServiceDetail from "./pages/ServiceDetail";
// import Blog from "./pages/Blog";
// import Reviews from "./pages/Reviews";
// import Contact from "./pages/Contact";

// function App() {
//   return (
//     <Router>
//       {/* Navbar always visible */}
//       <Navbar />

//       {/* Main Routes */}
//       <Routes>
//         {/* Home */}
//         <Route path="/" element={<Home />} />

//         {/* About */}
//         <Route path="/about" element={<About />} />

//         {/* Services listing */}
//         <Route path="/services" element={<Services />} />

//         {/* Service detail (dynamic) */}
//         <Route path="/services/:id" element={<ServiceDetail />} />

//         {/* Blog */}
//         <Route path="/blog" element={<Blog />} />

//         {/* Reviews */}
//         <Route path="/reviews" element={<Reviews />} />

//         {/* Contact */}
//         <Route path="/contact" element={<Contact />} />
        

//       </Routes>
//     </Router>
//   );
// }

// export default App;



// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// // Pages
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import ServiceDetail from "./pages/ServiceDetail";
// import Blog from "./pages/Blog";
// import Reviews from "./pages/Reviews";
// import Contact from "./pages/Contact";

// function App() {
//   return (
//     <Router>
//       {/* Navbar always visible */}
//       <Navbar />

//       {/* Main Routes */}
//       <Routes>
//         {/* Home */}
//         <Route path="/" element={<Home />} />

//         {/* About */}
//         <Route path="/about" element={<About />} />

//         {/* Services listing */}
//         <Route path="/services" element={<Services />} />

//         {/* Service detail (dynamic) */}
//         <Route path="/services/:id" element={<ServiceDetail />} />

//         {/* Blog */}
//         <Route path="/blog" element={<Blog />} />

//         {/* Reviews */}
//         <Route path="/reviews" element={<Reviews />} />

//         {/* Contact */}
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;







import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Blog from "./pages/Blog";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      {/* Navbar always visible */}
      <Navbar />

      {/* Main Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer always visible */}
      <Footer />
    </Router>
  );
}

export default App;
