// import { useEffect, useState } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";

// export default function Reviews() {
//   const [reviews, setReviews] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     domain: "",
//     rating: 0,
//     description: "",
//   });

//   const domains = [
//     "Web Development",
//     "Full Stack Development",
//     "UI / UX Design",
//     "DevOps",
//     "Hardware Projects",
//   ];

//   useEffect(() => {
//     fetchReviews();
//   }, []);

//   const fetchReviews = async () => {
//     const res = await axios.get("http://localhost:5000/api/reviews");
//     setReviews(res.data.data);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post("http://localhost:5000/api/reviews", formData);
//       alert("Thank you for your valuable review ❤️");

//       setFormData({
//         name: "",
//         domain: "",
//         rating: 0,
//         description: "",
//       });

//       fetchReviews();
//     } catch (err) {
//       alert("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen pt-32 px-6 md:px-20 text-white">

//       {/* HEADING */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-center mb-20"
//       >
//         <h1 className="text-5xl font-extrabold gradient-text mb-4">
//           Client Reviews
//         </h1>
//         <p className="text-gray-400 text-lg">
//           What people say about Explorix
//         </p>
//       </motion.div>

//       {/* REVIEW FORM */}
//       <div className="max-w-3xl mx-auto glass p-10 rounded-3xl mb-24">
//         <h2 className="text-3xl font-bold mb-8 text-center">
//           Submit Your Review
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="w-full p-4 rounded-xl bg-black/40 outline-none"
//             value={formData.name}
//             required
//             onChange={(e) =>
//               setFormData({ ...formData, name: e.target.value })
//             }
//           />

//           <select
//             className="w-full p-4 rounded-xl bg-black/40 outline-none"
//             required
//             value={formData.domain}
//             onChange={(e) =>
//               setFormData({ ...formData, domain: e.target.value })
//             }
//           >
//             <option value="">Select Domain</option>
//             {domains.map((d, i) => (
//               <option key={i} value={d}>
//                 {d}
//               </option>
//             ))}
//           </select>

//           {/* STAR RATING */}
//           <div className="flex gap-2 ">
//             {[1, 2, 3, 4, 5].map((star) => (
//               <button
//                 type="button"
//                 key={star}
//                 onClick={() =>
//                   setFormData({ ...formData, rating: star })
//                 }
//                 className={`text-6xl ${
//                   star <= formData.rating
//                     ? "text-yellow-400"
//                     : "text-gray-500"
//                 }`}
//               >
//                 ★
//               </button>
//             ))}
//           </div>

//           <textarea
//             placeholder="Write your experience..."
//             rows="4"
//             className="w-full p-4 rounded-xl bg-black/40 outline-none"
//             value={formData.description}
//             required
//             onChange={(e) =>
//               setFormData({ ...formData, description: e.target.value })
//             }
//           />

//           <button
//             type="submit"
//             className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-semibold hover:scale-105 transition"
//           >
//             Submit Review
//           </button>
//         </form>
//       </div>

//       {/* REVIEWS LIST */}
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//         {reviews.map((r, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="glass p-8 rounded-2xl"
//           >
//             <h3 className="text-xl font-semibold">{r.name}</h3>
//             <p className="text-purple-400 text-sm mb-2">{r.domain}</p>

//             <div className="text-yellow-400 mb-4">
//               {"★".repeat(r.rating)}
//               <span className="text-gray-600">
//                 {"★".repeat(5 - r.rating)}
//               </span>
//             </div>

//             <p className="text-gray-300">{r.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }








// import { useEffect, useState } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";

// export default function Reviews() {
//   const [reviews, setReviews] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     domain: "",
//     rating: 0,
//     description: "",
//   });

//   const domains = [
//     "Web Development",
//     "Full Stack Development",
//     "UI / UX Design",
//     "DevOps",
//     "Hardware Projects",
//   ];

//   useEffect(() => {
//     fetchReviews();
//   }, []);

//   const fetchReviews = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/reviews");
//       setReviews(res.data.data); // backend sends { success: true, data: [...] }
//     } catch (err) {
//       console.error("Fetch Reviews Error:", err.response?.data || err.message);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (formData.rating < 1) {
//       alert("Please select a star rating ⭐");
//       return;
//     }

//     if (formData.description.length < 5) {
//       alert("Review must be at least 5 characters");
//       return;
//     }

//     try {
//       const res = await axios.post("http://localhost:5000/api/reviews", formData);
//       if (res.data.success) {
//         alert("Thank you for your valuable review ❤️");

//         setFormData({
//           name: "",
//           domain: "",
//           rating: 0,
//           description: "",
//         });

//         fetchReviews();
//       }
//     } catch (err) {
//       console.error("Submit Review Error:", err.response?.data || err.message);
//       alert("Review not submitted. Check backend console for details.");
//     }
//   };

//   return (
//     <div className="min-h-screen pt-32 px-6 md:px-20 text-white">

//       {/* HEADING */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-center mb-20"
//       >
//         <h1 className="text-5xl font-extrabold gradient-text mb-4">
//           Client Reviews
//         </h1>
//         <p className="text-gray-400 text-lg">
//           What people say about Explorix
//         </p>
//       </motion.div>

//       {/* REVIEW FORM */}
//       <div className="max-w-3xl mx-auto glass p-10 rounded-3xl mb-24">
//         <h2 className="text-3xl font-bold mb-8 text-center">
//           Submit Your Review
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="w-full p-4 rounded-xl bg-black/40 outline-none"
//             value={formData.name}
//             required
//             onChange={(e) =>
//               setFormData({ ...formData, name: e.target.value })
//             }
//           />

//           <select
//             className="w-full p-4 rounded-xl bg-black/40 outline-none"
//             required
//             value={formData.domain}
//             onChange={(e) =>
//               setFormData({ ...formData, domain: e.target.value })
//             }
//           >
//             <option value="">Select Domain</option>
//             {domains.map((d, i) => (
//               <option key={i} value={d}>
//                 {d}
//               </option>
//             ))}
//           </select>

//           {/* STAR RATING */}
//           <div className="flex gap-2 ">
//             {[1, 2, 3, 4, 5].map((star) => (
//               <button
//                 type="button"
//                 key={star}
//                 onClick={() =>
//                   setFormData({ ...formData, rating: star })
//                 }
//                 className={`text-6xl ${
//                   star <= formData.rating
//                     ? "text-yellow-400"
//                     : "text-gray-500"
//                 }`}
//               >
//                 ★
//               </button>
//             ))}
//           </div>

//           <textarea
//             placeholder="Write your experience..."
//             rows="4"
//             className="w-full p-4 rounded-xl bg-black/40 outline-none"
//             value={formData.description}
//             required
//             onChange={(e) =>
//               setFormData({ ...formData, description: e.target.value })
//             }
//           />

//           <button
//             type="submit"
//             className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-semibold hover:scale-105 transition"
//           >
//             Submit Review
//           </button>
//         </form>
//       </div>

//       {/* REVIEWS LIST */}
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//         {reviews.map((r, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="glass p-8 rounded-2xl"
//           >
//             <h3 className="text-xl font-semibold">{r.name}</h3>
//             <p className="text-purple-400 text-sm mb-2">{r.domain}</p>

//             <div className="text-yellow-400 mb-4">
//               {"★".repeat(r.rating)}
//               <span className="text-gray-600">
//                 {"★".repeat(5 - r.rating)}
//               </span>
//             </div>

//             <p className="text-gray-300">{r.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }






import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import API_URL from "../config"; 

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    domain: "",
    rating: 0,
    description: "",
  });

  const domains = [
    "Web Development",
    "Full Stack Development",
    "UI / UX Design",
    "DevOps",
    "Hardware Projects",
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const res = await axios.get(`${API_URL}/reviews`);
      setReviews(res.data.data);
    } catch (err) {
      console.error("Fetch Reviews Error:", err.response?.data || err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.rating < 1) {
      alert("Please select a star rating ⭐");
      return;
    }

    if (formData.description.length < 5) {
      alert("Review must be at least 5 characters");
      return;
    }

    try {
      const res = await axios.post(
        `${API_URL}/reviews`,
        formData
      );

      if (res.data.success) {
        alert("Thank you for your valuable review ❤️");

        setFormData({
          name: "",
          domain: "",
          rating: 0,
          description: "",
        });

        fetchReviews();
      }
    } catch (err) {
      console.error("Submit Review Error:", err.response?.data || err.message);
      alert("Review not submitted. Check backend console for details.");
    }
  };

  return (
    <div className="min-h-screen pt-40 px-6 md:px-20 text-white">
      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl font-extrabold gradient-text mb-4">
          Client Reviews
        </h1>
        <p className="text-gray-400 text-lg">What people say about Explorix</p>
      </motion.div>

      {/* REVIEW FORM */}
      <div className="max-w-3xl mx-auto glass p-10 rounded-3xl mb-24">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Submit Your Review
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-xl bg-black/40 outline-none"
            value={formData.name}
            required
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />

          <select
            className="w-full p-4 rounded-xl bg-black/40 outline-none"
            required
            value={formData.domain}
            onChange={(e) =>
              setFormData({ ...formData, domain: e.target.value })
            }
          >
            <option value="">Select Domain</option>
            {domains.map((d, i) => (
              <option key={i} value={d}>
                {d}
              </option>
            ))}
          </select>

          {/* STAR RATING */}
          <div className="flex gap-2 ">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                type="button"
                key={star}
                onClick={() =>
                  setFormData({ ...formData, rating: star })
                }
                className={`text-6xl ${
                  star <= formData.rating ? "text-yellow-400" : "text-gray-500"
                }`}
              >
                ★
              </button>
            ))}
          </div>

          <textarea
            placeholder="Write your experience..."
            rows="4"
            className="w-full p-4 rounded-xl bg-black/40 outline-none"
            value={formData.description}
            required
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-semibold hover:scale-105 transition"
          >
            Submit Review
          </button>
        </form>
      </div>

      {/* REVIEWS LIST */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass p-8 rounded-2xl"
          >
            <h3 className="text-xl font-semibold">{r.name}</h3>
            <p className="text-purple-400 text-sm mb-2">{r.domain}</p>

            <div className="text-yellow-400 mb-4">
              {"★".repeat(r.rating)}
              <span className="text-gray-600">{"★".repeat(5 - r.rating)}</span>
            </div>

            <p className="text-gray-300">{r.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
