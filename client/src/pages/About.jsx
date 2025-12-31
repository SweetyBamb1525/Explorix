// import { motion } from "framer-motion";

// const leadership = [
//   {
//     role: "Chief Executive Officer (CEO)",
//     name: "SAHIL PAWAR",
//     image: "CEO.JPG",
//     about:
//       "Visionary leader driving Explorix with strategic planning, innovation, and execution.",
//     achievements: [
//       "Founded Explorix",
//       "Led 500+ successful projects",
//       "Startup growth & business strategy expert",
//     ],
//   },
//   {
//     role: "Chief Technology Officer (CTO)",
//     name: "SWEETY BAMB",
//     image: "CTO.jpg",
//     about:
//       "Responsible for technical architecture, scalability, and engineering excellence.",
//     achievements: [
//       "10+ years development experience",
//       "Built scalable MERN architectures",
//       "Tech mentor for 100+ developers",
//     ],
//   },

//   {
//     role: "Chief Technology Officer (C0-CTO)",
//     name: "VEDANT METHE",
//     image: "CO-CTO.jpg",
//     about:
//       "Responsible for technical architecture, scalability, and engineering excellence.",
//     achievements: [
//       "10+ years development experience",
//       "Built scalable MERN architectures",
//       "Tech mentor for 100+ developers",
//     ],
//   },
//   {
//     role: "Chief Marketing Officer (CMO)",
//     name: "SAKSHI JADHAV",
//     image: "CMO.jpg",
//     about:
//       "Growth strategist handling brand identity, digital marketing, and outreach.",
//     achievements: [
//       "Scaled brands to 1M+ reach",
//       "Performance marketing expert",
//       "Client acquisition strategist",
//     ],
//   },
//   {
//     role: "Chief Operating Officer (COO)",
//     name: "PRATISHTHA JAGTAP",
//     image: "COO.jpg",
//     about:
//       "Ensures smooth operations, delivery timelines, and client satisfaction.",
//     achievements: [
//       "Operations optimization expert",
//       "Managed cross-functional teams",
//       "Ensured 98% delivery success",
//     ],
//   },
// ];

// const domainLeaders = [
//   {
//     domain: "Web Development",
//     leader: "Ankit Rao",
//     reason:
//       "Expert in modern UI frameworks, performance optimization, and SEO-friendly websites.",
//   },
//   {
//     domain: "Full Stack Development",
//     leader: "Pooja Kulkarni",
//     reason:
//       "Strong MERN stack expertise with real-world scalable applications.",
//   },
//   {
//     domain: "DevOps",
//     leader: "Kunal Mehta",
//     reason:
//       "Specialist in CI/CD pipelines, cloud deployments, and server security.",
//   },
//   {
//     domain: "UI / UX Design",
//     leader: "Riya Shah",
//     reason:
//       "Creates user-centric designs with strong UX psychology and aesthetics.",
//   },
//   {
//     domain: "Hardware & IoT",
//     leader: "Saurabh Deshmukh",
//     reason:
//       "Hands-on experience with embedded systems and real-time hardware solutions.",
//   },
// ];

// export default function About() {
//   return (
//     <div className="text-white px-6 md:px-16 py-24">

//       {/* ABOUT EXPLORIX */}
//       <motion.section
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="max-w-5xl mx-auto text-center"
//       >
//         <h1 className="text-5xl font-extrabold gradient-text mb-6">
//           About Explorix
//         </h1>
//         <p className="text-gray-300 text-lg leading-relaxed">
//           Explorix is a multi-domain technology startup connecting businesses,
//           students, and freelancers to build high-quality digital and hardware
//           solutions. We believe in innovation, transparency, and real-world
//           impact.
//         </p>
//       </motion.section>

//       {/* LEADERSHIP TEAM */}
//       <section className="mt-32">
//         <h2 className="text-4xl font-bold text-center mb-16">
//           Core Leadership Team
//         </h2>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
//           {leadership.map((member, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: i * 0.1 }}
//               className="glass rounded-2xl p-6 text-center hover:scale-105 transition"
//             >
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
//               />
//               <h3 className="font-semibold text-lg">{member.name}</h3>
//               <p className="text-sm text-purple-400 mt-1">{member.role}</p>
//               <p className="text-sm text-gray-300 mt-4">{member.about}</p>

//               <ul className="text-sm text-gray-400 mt-4 space-y-1">
//                 {member.achievements.map((ach, idx) => (
//                   <li key={idx}>✔ {ach}</li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* DOMAIN LEADERS */}
//       <section className="mt-36">
//         <h2 className="text-4xl font-bold text-center mb-16">
//           Domain Leaders
//         </h2>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
//           {domainLeaders.map((d, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="glass p-8 rounded-2xl hover:-translate-y-2 transition"
//             >
//               <h3 className="text-2xl font-semibold mb-2">{d.domain}</h3>
//               <p className="text-purple-400 font-medium">
//                 Leader: {d.leader}
//               </p>
//               <p className="text-gray-300 mt-4 text-sm">
//                 {d.reason}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* TRUST SECTION */}
//       <section className="mt-40 text-center max-w-4xl mx-auto">
//         <h2 className="text-4xl font-bold mb-6">
//           Why Explorix?
//         </h2>
//         <p className="text-gray-300 text-lg">
//          At Explorix, we turn ideas into real-world solutions with innovation, trust, and creativity. Our projects deliver measurable results, delight clients with exceptional experiences, and are built to inspire growth and shape a brighter future.




//         </p>
//       </section>

//     </div>
//   );
// }

































import { motion } from "framer-motion";
import { useEffect } from "react";

const leadership = [
  {
    role: "Chief Executive Officer (CEO)",
    name: "SAHIL PAWAR",
    image: "CEO.JPG",
    about:
      "Visionary leader driving Explorix with strategic planning, innovation, and execution.",
    achievements: [
      "Founded Explorix",
      "Led 500+ successful projects",
      "Startup growth & business strategy expert",
    ],
  },
  {
    role: "Chief Technology Officer (CTO)",
    name: "SWEETY BAMB",
    image: "CTO.jpg",
    about:
      "Responsible for technical architecture, scalability, and engineering excellence.",
    achievements: [
      "10+ years development experience",
      "Built scalable MERN architectures",
      "Tech mentor for 100+ developers",
    ],
  },
  {
    role: "Co-Chief Technology Officer (CO-CTO)",
    name: "VEDANT METHE",
    image: "CO-CTO.jpg",
    about:
      "Focused on innovation, system optimization, and engineering leadership.",
    achievements: [
      "System optimization specialist",
      "Scalable backend systems",
      "Engineering leadership",
    ],
  },
  {
    role: "Chief Marketing Officer (CMO)",
    name: "SAKSHI JADHAV",
    image: "CMO.jpg",
    about:
      "Growth strategist handling brand identity, digital marketing, and outreach.",
    achievements: [
      "Scaled brands to 1M+ reach",
      "Performance marketing expert",
      "Client acquisition strategist",
    ],
  },
  {
    role: "Chief Operating Officer (COO)",
    name: "PRATISHTHA JAGTAP",
    image: "COO.jpg",
    about:
      "Ensures smooth operations, delivery timelines, and client satisfaction.",
    achievements: [
      "Operations optimization expert",
      "Managed cross-functional teams",
      "98% delivery success",
    ],
  },
];

const domainLeaders = [
  {
    domain: "Web Development",
    leader: "Ankit Rao",
    reason:
      "Expert in modern UI frameworks, performance optimization, and SEO-friendly websites.",
  },
  {
    domain: "Full Stack Development",
    leader: "Pooja Kulkarni",
    reason:
      "Strong MERN stack expertise with real-world scalable applications.",
  },
  {
    domain: "DevOps",
    leader: "Kunal Mehta",
    reason:
      "Specialist in CI/CD pipelines, cloud deployments, and server security.",
  },
  {
    domain: "UI / UX Design",
    leader: "Riya Shah",
    reason:
      "Creates user-centric designs with strong UX psychology and aesthetics.",
  },
  {
    domain: "Hardware & IoT",
    leader: "Saurabh Deshmukh",
    reason:
      "Hands-on experience with embedded systems and real-time hardware solutions.",
  },
];

export default function About() {
  // ✅ FORCE PAGE TO OPEN FROM TOP
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="text-white px-6 md:px-16 pt-36 pb-24">
      {/* ABOUT EXPLORIX */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h1 className="text-5xl font-extrabold gradient-text mb-6">
          About Explorix
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          Explorix is a multi-domain technology startup connecting businesses,
          students, and freelancers to build high-quality digital and hardware
          solutions. We believe in innovation, transparency, and real-world
          impact.
        </p>
      </motion.section>

      {/* LEADERSHIP TEAM */}
      <section className="mt-32">
        <h2 className="text-4xl font-bold text-center mb-16">
          Core Leadership Team
        </h2>

        {/* ✅ ONE LINE ON LARGE SCREENS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {leadership.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center hover:scale-105 transition"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold text-base">{member.name}</h3>
              <p className="text-xs text-purple-400 mt-1">{member.role}</p>

              <p className="text-sm text-gray-300 mt-3">
                {member.about}
              </p>

              <ul className="text-xs text-gray-400 mt-4 space-y-1">
                {member.achievements.map((ach, idx) => (
                  <li key={idx}>✔ {ach}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DOMAIN LEADERS */}
      <section className="mt-36">
        <h2 className="text-4xl font-bold text-center mb-16">
          Domain Leaders
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {domainLeaders.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass p-8 rounded-2xl hover:-translate-y-2 transition"
            >
              <h3 className="text-2xl font-semibold mb-2">{d.domain}</h3>
              <p className="text-purple-400 font-medium">
                Leader: {d.leader}
              </p>
              <p className="text-gray-300 mt-4 text-sm">
                {d.reason}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="mt-40 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">
          Why Explorix?
        </h2>
        <p className="text-gray-300 text-lg">
          At Explorix, we turn ideas into real-world solutions with innovation,
          trust, and creativity. Our work delivers measurable results and builds
          a future-ready digital ecosystem.
        </p>
      </section>
    </div>
  );
}
