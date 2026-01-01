import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaYoutube,
  FaFacebook,
  FaWhatsapp,
  FaLocationArrow,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-40 bg-black/70 backdrop-blur border-t border-white/10 text-gray-300">

      {/* TOP FOOTER */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-24 grid gap-16 lg:grid-cols-4">

        {/* BRAND */}
        <div>
          <h1 className="text-4xl font-extrabold gradient-text mb-6">
            Explorix
          </h1>
          <p className="text-gray-400 leading-relaxed mb-6">
            Explorix is a multi-domain technology startup delivering powerful
            digital, software, and hardware solutions. We turn ideas into
            real-world impact through innovation, trust, and excellence.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex flex-wrap gap-4 text-2xl">
            <Social icon={<FaInstagram />} link="https://www.instagram.com/explorix.01?igsh=MW92ZnNpcTE0NjU2dQ==" />
            <Social icon={<FaTwitter />} link="https://x.com/Explorix147726" />
            <Social icon={<FaLinkedin />} link="https://www.linkedin.com/company/explorix-solutions/" />
            <Social icon={<FaGithub />} link="https://github.com/explorix" />
            <Social icon={<FaYoutube />} link="#" />
            <Social icon={<FaFacebook />} link="#" />
            <Social icon={<FaWhatsapp />} link="https://wa.me/917447740744" />
            <Social icon={<FaEnvelope />} link="https://github.com/explorix01-png" />
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-white">Quick Links</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="/" className="hover:text-purple-400">Home</a></li>
            <li><a href="/about" className="hover:text-purple-400">About Us</a></li>
            <li><a href="/services" className="hover:text-purple-400">Services</a></li>
            <li><a href="/blogs" className="hover:text-purple-400">Blogs</a></li>
            <li><a href="/reviews" className="hover:text-purple-400">Reviews</a></li>
            <li><a href="/contact" className="hover:text-purple-400">Contact</a></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-white">Our Domains</h3>
          <ul className="space-y-4 text-sm">
            <li>Web Development</li>
            <li>Full Stack Development</li>
            <li>UI / UX Design</li>
            <li>DevOps & Cloud</li>
            <li>Mobile App Development</li>
            <li>Hardware & IoT Projects</li>
            <li>AI & Automation</li>
          </ul>
        </div>

        {/* CONTACT + NEWSLETTER */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-white">Contact Us</h3>

          <div className="space-y-4 text-sm mb-8">
            <p className="flex items-center gap-3">
              <FaLocationArrow className="text-purple-400" />
              India • Remote Worldwide
            </p>

            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-purple-400" />
              +91 99999 99999
            </p>

            <p className="flex items-center gap-3">
              <FaEnvelope className="text-purple-400" />
              explorix.tech@gmail.com
            </p>
          </div>

          {/* NEWSLETTER */}
          <div>
            <p className="mb-4 text-sm text-gray-400">
              Subscribe for updates & opportunities
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-black/40 outline-none text-sm"
              />
              <button
                type="button"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-semibold hover:scale-105 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Explorix • Built with ❤️ using MERN Stack
      </div>
    </footer>
  );
}

function Social({ icon, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="p-3 rounded-xl bg-black/40 hover:bg-purple-600/30 hover:text-white transition"
    >
      {icon}
    </a>
  );
}






// import { FaInstagram, FaLinkedin, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="bg-[#0b0b14] text-gray-300 pt-16 pb-10 mt-24">
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

//         {/* BRAND */}
//         <div>
//           <h2 className="text-3xl font-extrabold gradient-text mb-4">
//             Explorix
//           </h2>
//           <p className="text-sm leading-relaxed text-gray-400">
//             Explorix is a multi-domain technology startup delivering
//             innovative digital and hardware solutions with trust,
//             creativity, and real-world impact.
//           </p>
//         </div>

//         {/* QUICK LINKS */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4 text-white">
//             Quick Links
//           </h3>
//           <ul className="space-y-3 text-sm">
//             <li><a href="/" className="hover:text-purple-400">Home</a></li>
//             <li><a href="/about" className="hover:text-purple-400">About Us</a></li>
//             <li><a href="/services" className="hover:text-purple-400">Services</a></li>
//             <li><a href="/blog" className="hover:text-purple-400">Blog</a></li>
//             <li><a href="/contact" className="hover:text-purple-400">Contact</a></li>
//           </ul>
//         </div>

//         {/* SERVICES */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4 text-white">
//             Our Services
//           </h3>
//           <ul className="space-y-3 text-sm">
//             <li>Web Development</li>
//             <li>Full Stack Development</li>
//             <li>UI / UX Design</li>
//             <li>DevOps & Cloud</li>
//             <li>Hardware & IoT</li>
//           </ul>
//         </div>

//         {/* SOCIAL */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4 text-white">
//             Connect With Us
//           </h3>

//           <div className="flex gap-4 text-2xl">
//             <a href="#" className="hover:text-pink-500 transition">
//               <FaInstagram />
//             </a>
//             <a href="#" className="hover:text-blue-500 transition">
//               <FaLinkedin />
//             </a>
//             <a href="#" className="hover:text-gray-400 transition">
//               <FaGithub />
//             </a>
//             <a href="#" className="hover:text-sky-400 transition">
//               <FaTwitter />
//             </a>
//             <a href="#" className="hover:text-red-500 transition">
//               <FaYoutube />
//             </a>
//           </div>

//           <p className="text-sm text-gray-400 mt-6">
//             Let’s build something amazing together 🚀
//           </p>
//         </div>

//       </div>
//     </footer>
//   );
// }



// import {
//   FaInstagram,
//   FaLinkedin,
//   FaGithub,
//   FaTwitter,
//   FaYoutube,
// } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="bg-[#0b0b14] text-gray-300 pt-16 pb-10 mt-24">
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

//         {/* BRAND */}
//         <div>
//           <h2 className="text-3xl font-extrabold gradient-text mb-4">
//             Explorix
//           </h2>
//           <p className="text-sm text-gray-400 leading-relaxed">
//             Explorix is a multi-domain technology startup delivering
//             innovative digital and hardware solutions with real-world impact.
//           </p>
//         </div>

//         {/* QUICK LINKS */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4 text-white">
//             Quick Links
//           </h3>
//           <ul className="space-y-3 text-sm">
//             <li><a href="/" className="hover:text-purple-400">Home</a></li>
//             <li><a href="/about" className="hover:text-purple-400">About</a></li>
//             <li><a href="/services" className="hover:text-purple-400">Services</a></li>
//             <li><a href="/blog" className="hover:text-purple-400">Blog</a></li>
//             <li><a href="/contact" className="hover:text-purple-400">Contact</a></li>
//           </ul>
//         </div>

//         {/* SERVICES */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4 text-white">
//             Services
//           </h3>
//           <ul className="space-y-3 text-sm">
//             <li>Web Development</li>
//             <li>Full Stack Development</li>
//             <li>UI / UX Design</li>
//             <li>DevOps & Cloud</li>
//             <li>Hardware & IoT</li>
//           </ul>
//         </div>

//         {/* SOCIAL LINKS */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4 text-white">
//             Follow Us
//           </h3>

//           <div className="flex gap-4 text-2xl">
//             <a
//               href="https://www.instagram.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-pink-500"
//             >
//               <FaInstagram />
//             </a>

//             <a
//               href="https://www.linkedin.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-blue-500"
//             >
//               <FaLinkedin />
//             </a>

//             <a
//               href="https://github.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-gray-400"
//             >
//               <FaGithub />
//             </a>

//             <a
//               href="https://twitter.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-sky-400"
//             >
//               <FaTwitter />
//             </a>

//             <a
//               href="https://www.youtube.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-red-500"
//             >
//               <FaYoutube />
//             </a>
//           </div>

//           <p className="text-sm text-gray-400 mt-6">
//             Let’s build something amazing 🚀
//           </p>
//         </div>

//       </div>
//     </footer>
//   );
// }
