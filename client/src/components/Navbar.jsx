// import { useNavigate } from "react-router-dom";

// export default function Navbar() {
//   const navigate = useNavigate();

//   const goToSection = (id) => {
//     navigate(`/#${id}`);
//     setTimeout(() => {
//       const el = document.getElementById(id);
//       el && el.scrollIntoView({ behavior: "smooth" });
//     }, 100);
//   };

//   return (
//     <nav className="fixed w-full z-50 glass">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//         <h1
//           onClick={() => goToSection("home")}
//           className="text-2xl font-extrabold gradient-text cursor-pointer"
//         >
//           Explorix
//         </h1>

//         <div className="hidden md:flex gap-10 items-center">
//           <button onClick={() => goToSection("home")}>Home</button>
//           <button onClick={() => goToSection("about")}>About Us</button>
//           <button onClick={() => goToSection("services")}>Services</button>
//           <button onClick={() => goToSection("blog")}>Blog</button>
//           <button onClick={() => goToSection("reviews")}>Reviews</button>
//           <button
//             onClick={() => navigate("/contact")}
//             className="btn-primary"
//           >
//             Contact
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Navbar() {
//   const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(false);

//   const goToSection = (id) => {
//     navigate(`/#${id}`);
//     setTimeout(() => {
//       const el = document.getElementById(id);
//       el && el.scrollIntoView({ behavior: "smooth" });
//     }, 100);
//     setIsOpen(false); // Close menu on link click
//   };

//   return (
//     <nav className="fixed w-full z-50 glass">
//       <div className="max-w-7xl mx-auto px-8 py-8 flex justify-between items-center">
//         {/* Logo on the left */}
//         <h1
//           onClick={() => goToSection("home")}
//           className="text-4xl md:text-5xl font-extrabold gradient-text cursor-pointer"
//         >
//           Explorix
//         </h1>

//         {/* Desktop Links */}
//         <div className="hidden md:flex gap-12 items-center text-xl md:text-2xl" style={{ marginLeft: "50px"}}>
//           <button onClick={() => goToSection("home")}>Home</button>
//           <button onClick={() => goToSection("about")}>About Us</button>
//           <button onClick={() => goToSection("services")}>Services</button>
//           <button onClick={() => goToSection("blog")}>Blog</button>
//           <button onClick={() => goToSection("reviews")}>Reviews</button>
//           <button
//             onClick={() => navigate("/contact")}
//             className="btn-primary py-3 px-6 text-xl md:text-2xl"
//           >
//             Contact
//           </button>
//         </div>

//         {/* Hamburger Menu on the right */}
//         <div
//           className="md:hidden flex flex-col cursor-pointer gap-3"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <span
//             className={`block h-1 w-10 bg-white transition-transform duration-300 ${
//               isOpen ? "rotate-45 translate-y-2" : ""
//             }`}
//           ></span>
//           <span
//             className={`block h-1 w-10 bg-white transition-opacity duration-300 ${
//               isOpen ? "opacity-0" : "opacity-100"
//             }`}
//           ></span>
//           <span
//             className={`block h-1 w-10 bg-white transition-transform duration-300 ${
//               isOpen ? "-rotate-45 -translate-y-2" : ""
//             }`}
//           ></span>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden bg-gray-900 bg-opacity-95 w-full text-center transition-max-h duration-300 overflow-hidden ${
//           isOpen ? "max-h-screen" : "max-h-0"
//         }`}
//       >
//         <button
//           className="block w-full py-6 text-white border-b border-gray-700 text-xl"
//           onClick={() => goToSection("home")}
//         >
//           Home
//         </button>
//         <button
//           className="block w-full py-6 text-white border-b border-gray-700 text-xl"
//           onClick={() => goToSection("about")}
//         >
//           About Us
//         </button>
//         <button
//           className="block w-full py-6 text-white border-b border-gray-700 text-xl"
//           onClick={() => goToSection("services")}
//         >
//           Services
//         </button>
//         <button
//           className="block w-full py-6 text-white border-b border-gray-700 text-xl"
//           onClick={() => goToSection("blog")}
//         >
//           Blog
//         </button>
//         <button
//           className="block w-full py-6 text-white border-b border-gray-700 text-xl"
//           onClick={() => goToSection("reviews")}
//         >
//           Reviews
//         </button>
//         <button
//           className="block w-full py-6 text-white btn-primary text-xl"
//           onClick={() => navigate("/contact")}
//         >
//           Contact
//         </button>
//       </div>
//     </nav>
//   );
// }



// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Navbar() {
//   const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(false);

//   const goToSection = (id) => {
//     navigate(`/#${id}`);
//     setTimeout(() => {
//       const el = document.getElementById(id);
//       el && el.scrollIntoView({ behavior: "smooth" });
//     }, 100);
//     setIsOpen(false); // Close menu on link click
//   };

//   return (
//     <nav className="fixed w-full z-50 glass">
//       <div className="max-w-7xl mx-auto px-8 py-8 flex justify-between items-center">
//         {/* Logo on the left */}
//         <div className="cursor-pointer" onClick={() => goToSection("home")}>
//           <img
//             src="logo2.png" // Place your logo in public folder
//             alt="Explorix Logo"
//             className="h-20 md:h-24 object-contain -my-2"
//           />
//         </div>




//         {/* Desktop Links */}
//         <div
//           className="hidden md:flex gap-12 items-center text-xl md:text-2xl"
//           style={{ marginLeft: "50px" }}
//         >
//           <button onClick={() => goToSection("home")}>Home</button>
//           <button onClick={() => goToSection("about")}>About Us</button>
//           <button onClick={() => goToSection("services")}>Services</button>
//           <button onClick={() => goToSection("blog")}>Blog</button>
//           <button onClick={() => goToSection("reviews")}>Reviews</button>
//           <button
//             onClick={() => navigate("/contact")}
//             className="btn-primary py-3 px-6 text-xl md:text-2xl"
//           >
//             Contact
//           </button>
//         </div>

//         {/* Hamburger Menu on the right */}
//         <div
//           className="md:hidden flex flex-col cursor-pointer gap-3"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <span
//             className={`block h-1 w-10 bg-white transition-transform duration-300 ${
//               isOpen ? "rotate-45 translate-y-2" : ""
//             }`}
//           ></span>
//           <span
//             className={`block h-1 w-10 bg-white transition-opacity duration-300 ${
//               isOpen ? "opacity-0" : "opacity-100"
//             }`}
//           ></span>
//           <span
//             className={`block h-1 w-10 bg-white transition-transform duration-300 ${
//               isOpen ? "-rotate-45 -translate-y-2" : ""
//             }`}
//           ></span>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden bg-gray-900 bg-opacity-95 w-full text-center transition-max-h duration-300 overflow-hidden ${
//           isOpen ? "max-h-screen" : "max-h-0"
//         }`}
//       >
//         <button
//           className="block w-full py-6 text-white border-b border-gray-700 text-xl"
//           onClick={() => goToSection("home")}
//         >
//           Home
//         </button>
//         <button
//           className="block w-full py-6 text-white border-b border-gray-700 text-xl"
//           onClick={() => goToSection("about")}
//         >
//           About Us
//         </button>
//         <button
//           className="block w-full py-6 text-white border-b border-gray-700 text-xl"
//           onClick={() => goToSection("services")}
//         >
//           Services
//         </button>
//         <button
//           className="block w-full py-6 text-white border-b border-gray-700 text-xl"
//           onClick={() => goToSection("blog")}
//         >
//           Blog
//         </button>
//         <button
//           className="block w-full py-6 text-white border-b border-gray-700 text-xl"
//           onClick={() => goToSection("reviews")}
//         >
//           Reviews
//         </button>
//         <button
//           className="block w-full py-6 text-white btn-primary text-xl"
//           onClick={() => navigate("/contact")}
//         >
//           Contact
//         </button>
//       </div>
//     </nav>
//   );
// }



import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const goToSection = (id) => {
    navigate(`/#${id}`);
    setTimeout(() => {
      const el = document.getElementById(id);
      el && el.scrollIntoView({ behavior: "smooth" });
    }, 100);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6 flex justify-between items-center">
        
        {/* Logo */}
        <div className="cursor-pointer" onClick={() => goToSection("home")}>
          <img
            src="logo2.png"
            alt="Explorix Logo"
            className="h-14 sm:h-16 md:h-20 lg:h-24 object-contain"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 lg:gap-12 items-center text-lg lg:text-2xl">
          <button onClick={() => goToSection("home")}>Home</button>
          <button onClick={() => goToSection("about")}>About Us</button>
          <button onClick={() => goToSection("services")}>Services</button>
          <button onClick={() => goToSection("blog")}>Blog</button>
          <button onClick={() => goToSection("reviews")}>Reviews</button>
          <button
            onClick={() => navigate("/contact")}
            className="btn-primary py-2 lg:py-3 px-5 lg:px-6 text-lg lg:text-2xl"
          >
            Contact
          </button>
        </div>

        {/* Hamburger */}
        <div
          className="md:hidden flex flex-col cursor-pointer gap-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block h-1 w-8 bg-white transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-1 w-8 bg-white transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block h-1 w-8 bg-white transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-900 bg-opacity-95 w-full text-center overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] py-2" : "max-h-0"
        }`}
      >
        <button className="block w-full py-4 text-white border-b border-gray-700 text-lg" onClick={() => goToSection("home")}>
          Home
        </button>
        <button className="block w-full py-4 text-white border-b border-gray-700 text-lg" onClick={() => goToSection("about")}>
          About Us
        </button>
        <button className="block w-full py-4 text-white border-b border-gray-700 text-lg" onClick={() => goToSection("services")}>
          Services
        </button>
        <button className="block w-full py-4 text-white border-b border-gray-700 text-lg" onClick={() => goToSection("blog")}>
          Blog
        </button>
        <button className="block w-full py-4 text-white border-b border-gray-700 text-lg" onClick={() => goToSection("reviews")}>
          Reviews
        </button>
        <button
          className="block w-full py-4 text-white btn-primary text-lg"
          onClick={() => navigate("/contact")}
        >
          Contact
        </button>
      </div>
    </nav>
  );
}
