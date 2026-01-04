// import axios from "axios";

// const API = axios.create({
//   baseURL:
//     process.env.NODE_ENV === "development"
//       ? "http://localhost:5000"
//       : "https://explorix-2.onrender.com",
// });

// export default API;


// import axios from "axios";

// const API = axios.create({
//   baseURL:
//     window.location.hostname === "localhost"
//       ? "http://localhost:5000"
//       : "https://explorix-2.onrender.com",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export default API;






// import axios from "axios";

// const API = axios.create({
//   baseURL:
//     process.env.NODE_ENV === "development"
//       ? "http://localhost:5000"
//       : "https://explorix-2.onrender.com", // ✅ your Render backend
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export default API;



// import axios from "axios";

// const API = axios.create({
//   baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export default API;



import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
