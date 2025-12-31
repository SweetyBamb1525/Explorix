// import { motion } from "framer-motion";
// import { FaInstagram, FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
// import { useState } from "react";
// import axios from "axios";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("/api/projects", {
//         ...formData,
//         service: "General Enquiry",
//       });
//       alert("Thank you for contacting Explorix! We’ll get back to you soon.");
//       setFormData({ name: "", email: "", message: "" });
//     } catch (error) {
//       alert("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen pt-32 px-6 md:px-20 text-white">

//       {/* HEADER */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-center max-w-3xl mx-auto"
//       >
//         <h1 className="text-5xl md:text-6xl font-extrabold gradient-text mb-6">
//           Contact Explorix
//         </h1>
//         <p className="text-gray-300 text-lg">
//           Let’s build something impactful together 🚀  
//           Reach out via social platforms or send us a message.
//         </p>
//       </motion.div>

//       {/* CONTENT */}
//       <div className="mt-24 grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">

//         {/* LEFT: SOCIAL MEDIA */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="glass p-10 rounded-3xl"
//         >
//           <h2 className="text-3xl font-bold mb-6">Connect With Us</h2>

//           <p className="text-gray-400 mb-10">
//             Follow Explorix on social media for updates, projects & opportunities.
//           </p>

//           <div className="space-y-6">

//             <SocialLink
//               icon={<FaInstagram />}
//               label="Instagram"
//               link="https://instagram.com/explorix"
//             />

//             <SocialLink
//               icon={<FaTwitter />}
//               label="Twitter / X"
//               link="https://twitter.com/explorix"
//             />

//             <SocialLink
//               icon={<FaLinkedin />}
//               label="LinkedIn"
//               link="https://linkedin.com/company/explorix"
//             />

//             <SocialLink
//               icon={<FaGithub />}
//               label="GitHub"
//               link="https://github.com/explorix"
//             />

//             <SocialLink
//               icon={<FaEnvelope />}
//               label="Email Us"
//               link="mailto:explorix.tech@gmail.com"
//             />

//           </div>
//         </motion.div>

//         {/* RIGHT: FORM */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="glass p-10 rounded-3xl"
//         >
//           <h2 className="text-3xl font-bold mb-8">Send Us an Enquiry</h2>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full p-4 rounded-xl bg-black/40 outline-none focus:ring-2 focus:ring-purple-600"
//             />

//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full p-4 rounded-xl bg-black/40 outline-none focus:ring-2 focus:ring-purple-600"
//             />

//             <textarea
//               name="message"
//               placeholder="Write your message..."
//               rows="5"
//               value={formData.message}
//               onChange={handleChange}
//               required
//               className="w-full p-4 rounded-xl bg-black/40 outline-none focus:ring-2 focus:ring-purple-600"
//             />

//             <button
//               type="submit"
//               className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-semibold text-lg hover:scale-105 transition"
//             >
//               Submit Enquiry
//             </button>
//           </form>
//         </motion.div>

//       </div>

//       {/* FOOTER NOTE */}
//       <div className="text-center mt-24 text-gray-500 text-sm">
//         © {new Date().getFullYear()} Explorix. All rights reserved.
//       </div>

//     </div>
//   );
// }

// /* SOCIAL LINK COMPONENT */
// function SocialLink({ icon, label, link }) {
//   return (
//     <a
//       href={link}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="flex items-center gap-5 p-4 rounded-xl bg-black/40 hover:bg-purple-600/20 transition"
//     >
//       <div className="text-3xl text-purple-400">{icon}</div>
//       <span className="text-lg font-medium">{label}</span>
//     </a>
//   );
// }











import { motion } from "framer-motion";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/contact", {
        name: formData.name,
        email: formData.email,
        subject: "General Enquiry",
        message: formData.message,
      });

      alert("Thank you for contacting Explorix! We’ll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error.response?.data || error.message);
      alert("Enquiry not submitted. Check backend.");
    }
  };

  return (
    <div className="min-h-screen pt-40 px-6 md:px-20 text-white">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold gradient-text mb-6">
          Contact Explorix
        </h1>
        <p className="text-gray-300 text-lg">
          Let’s build something impactful together 🚀 Reach out via social
          platforms or send us a message.
        </p>
      </motion.div>

      {/* CONTENT */}
      <div className="mt-24 grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
        {/* LEFT: SOCIAL MEDIA */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="glass p-10 rounded-3xl"
        >
          <h2 className="text-3xl font-bold mb-6">Connect With Us</h2>

          <p className="text-gray-400 mb-10">
            Follow Explorix on social media for updates, projects & opportunities.
          </p>

          <div className="space-y-6">
            <SocialLink
              icon={<FaInstagram />}
              label="Instagram"
              link="https://www.instagram.com/explorix.01?igsh=MW92ZnNpcTE0NjU2dQ=="
            />

            <SocialLink
              icon={<FaTwitter />}
              label="Twitter / X"
              link="https://x.com/Explorix147726"
            />

            <SocialLink
              icon={<FaLinkedin />}
              label="LinkedIn"
              link="https://www.linkedin.com/company/explorix-solutions/"
            />

            <SocialLink
              icon={<FaGithub />}
              label="GitHub"
              link="https://github.com/explorix01-png"
            />

            <SocialLink
              icon={<FaEnvelope />}
              label="Email Us"
              link="explorix.01@gmail.com"
            />
          </div>
        </motion.div>

        {/* RIGHT: FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="glass p-10 rounded-3xl"
        >
          <h2 className="text-3xl font-bold mb-8">Send Us an Enquiry</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl bg-black/40 outline-none focus:ring-2 focus:ring-purple-600"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl bg-black/40 outline-none focus:ring-2 focus:ring-purple-600"
            />

            <textarea
              name="message"
              placeholder="Write your message..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl bg-black/40 outline-none focus:ring-2 focus:ring-purple-600"
            />

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-semibold text-lg hover:scale-105 transition"
            >
              Submit Enquiry
            </button>
          </form>
        </motion.div>
      </div>

      {/* FOOTER NOTE */}
      <div className="text-center mt-24 text-gray-500 text-sm">
        © {new Date().getFullYear()} Explorix. All rights reserved.
      </div>
    </div>
  );
}

/* SOCIAL LINK COMPONENT */
function SocialLink({ icon, label, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-5 p-4 rounded-xl bg-black/40 hover:bg-purple-600/20 transition"
    >
      <div className="text-3xl text-purple-400">{icon}</div>
      <span className="text-lg font-medium">{label}</span>
    </a>
  );
}







