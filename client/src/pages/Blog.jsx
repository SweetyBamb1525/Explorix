// import { useEffect, useState } from "react";
// import axios from "axios";
// //import API_URL from "../config";
// const API_URL = `${process.env.REACT_APP_API_URL}/api/blogs`;



//const API_URL = "http://localhost:5000/api/blogs";




// export default function Blog() {
//   const [blogs, setBlogs] = useState([]);
//   const [form, setForm] = useState({
//     title: "",
//     content: "",
//     author: "",
//   });
//   const [editId, setEditId] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // LOAD BLOGS
//   const loadBlogs = async () => {
//     try {
//       const res = await axios.get(API_URL);
//       console.log("SERVER RESPONSE:", res.data);
//       setBlogs(res.data);
//     } catch (error) {
//       console.error("Load blogs error:", error);
//     }
//   };

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     loadBlogs();
//   }, []);

//   // SUBMIT BLOG
//   const submitHandler = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       if (editId) {
//         await axios.put(`${API_URL}/${editId}`, form);
//         setEditId(null);
//       } else {
//         await axios.post(API_URL, form);
//       }

//       setForm({
//         title: "",
//         content: "",
//         author: "",
//       });

//       loadBlogs();
//     // } catch (error) {
//     //   console.error("Submit error:", error);
//     //   alert("Blog not submitted. Check backend.");
//     // }


//     } catch (error) {
//   console.error("Submit error:", error.response || error);
//   alert("Blog saved in DB but response failed. Refresh page.");
// }


//     setLoading(false);
//   };

//   // EDIT BLOG
//   const editBlog = (blog) => {
//     setForm({
//       title: blog.title,
//       content: blog.content,
//       author: blog.author,
//     });
//     setEditId(blog._id);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   // DELETE BLOG
//   const deleteBlog = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this blog?")) return;

//     try {
//       await axios.delete(`${API_URL}/${id}`);
//       loadBlogs();
//     } catch (error) {
//       console.error("Delete error:", error);
//       alert("Delete failed. Backend route missing.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-black text-white px-6 pt-40 py-24">
//       <h1 className="text-5xl font-bold text-center mb-10">
//         Explorix Blogs
//       </h1>

//       {/* BLOG FORM */}
//       <form
//         onSubmit={submitHandler}
//         className="max-w-3xl mx-auto bg-white/10 p-8 rounded-3xl space-y-4"
//       >
//         <input
//           type="text"
//           placeholder="Blog Title"
//           className="w-full p-3 rounded bg-black/40 outline-none"
//           value={form.title}
//           onChange={(e) =>
//             setForm({ ...form, title: e.target.value })
//           }
//           required
//         />

//         <input
//           type="text"
//           placeholder="Author Name"
//           className="w-full p-3 rounded bg-black/40 outline-none"
//           value={form.author}
//           onChange={(e) =>
//             setForm({ ...form, author: e.target.value })
//           }
//           required
//         />

//         <textarea
//           placeholder="Blog Content"
//           rows="5"
//           className="w-full p-3 rounded bg-black/40 outline-none"
//           value={form.content}
//           onChange={(e) =>
//             setForm({ ...form, content: e.target.value })
//           }
//           required
//         />

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-purple-600 py-3 rounded font-bold hover:scale-105 transition disabled:opacity-60"
//         >
//           {loading
//             ? "Please wait..."
//             : editId
//             ? "Update Blog"
//             : "Publish Blog"}
//         </button>
//       </form>

//       {/* BLOG LIST */}
//       <div className="max-w-5xl mx-auto mt-16 grid md:grid-cols-2 gap-8">
//         {blogs.length === 0 && (
//           <p className="text-center col-span-full text-gray-400">
//             No blogs published yet.
//           </p>
//         )}

//         {blogs.map((blog) => (
//           <div
//             key={blog._id}
//             className="bg-white/10 p-6 rounded-2xl"
//           >
//             <h2 className="text-2xl font-bold mb-1">
//               {blog.title}
//             </h2>

//             <p className="text-sm text-gray-400 mb-3">
//               By {blog.author} •{" "}
//               {new Date(blog.createdAt).toDateString()}
//             </p>

//             <p className="text-gray-300 mb-4">
//               {blog.content}
//             </p>

//             <div className="flex gap-4">
//               <button
//                 onClick={() => editBlog(blog)}
//                 className="bg-blue-600 px-4 py-2 rounded hover:opacity-90"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => deleteBlog(blog._id)}
//                 className="bg-red-600 px-4 py-2 rounded hover:opacity-90"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }












// import { useEffect, useState } from "react";
// import axios from "axios";

// const API_URL = `${process.env.REACT_APP_API_URL}/api/blogs`;

// export default function Blog() {
//   const [blogs, setBlogs] = useState([]); // ✅ always array
//   const [form, setForm] = useState({
//     title: "",
//     content: "",
//     author: "",
//   });
//   const [editId, setEditId] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // LOAD BLOGS
//   const loadBlogs = async () => {
//     try {
//       const res = await axios.get(API_URL);

//       // ✅ SAFETY CHECK
//       if (res.data && Array.isArray(res.data.data)) {
//         setBlogs(res.data.data);
//       } else {
//         setBlogs([]); // fallback
//       }
//     } catch (error) {
//       console.error("Load blogs error:", error);
//       setBlogs([]); // ✅ prevent crash
//     }
//   };

//   useEffect(() => {
//     loadBlogs();
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, []);

//   // SUBMIT BLOG
//   const submitHandler = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       if (editId) {
//         await axios.put(`${API_URL}/${editId}`, form);
//         setEditId(null);
//       } else {
//         await axios.post(API_URL, form);
//       }

//       setForm({ title: "", content: "", author: "" });
//       loadBlogs();
//     } catch (error) {
//       console.error("Submit error:", error);
//       alert("Backend error");
//     }

//     setLoading(false);
//   };

//   const editBlog = (blog) => {
//     setForm({
//       title: blog.title,
//       content: blog.content,
//       author: blog.author,
//     });
//     setEditId(blog._id);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const deleteBlog = async (id) => {
//     if (!window.confirm("Delete this blog?")) return;

//     try {
//       await axios.delete(`${API_URL}/${id}`);
//       loadBlogs();
//     } catch (error) {
//       alert("Backend error");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-black text-white px-6 pt-40 pb-24">
//       <h1 className="text-5xl font-bold text-center mb-10">
//         Explorix Blogs
//       </h1>

//       {/* BLOG FORM */}
//       <form
//         onSubmit={submitHandler}
//         className="max-w-3xl mx-auto bg-white/10 p-8 rounded-3xl space-y-4"
//       >
//         <input
//           type="text"
//           placeholder="Blog Title"
//           className="w-full p-3 rounded bg-black/40"
//           value={form.title}
//           onChange={(e) => setForm({ ...form, title: e.target.value })}
//           required
//         />

//         <input
//           type="text"
//           placeholder="Author Name"
//           className="w-full p-3 rounded bg-black/40"
//           value={form.author}
//           onChange={(e) => setForm({ ...form, author: e.target.value })}
//           required
//         />

//         <textarea
//           placeholder="Blog Content"
//           rows="5"
//           className="w-full p-3 rounded bg-black/40"
//           value={form.content}
//           onChange={(e) => setForm({ ...form, content: e.target.value })}
//           required
//         />

//         <button
//           disabled={loading}
//           className="w-full bg-purple-600 py-3 rounded font-bold"
//         >
//           {loading ? "Please wait..." : editId ? "Update Blog" : "Publish Blog"}
//         </button>
//       </form>

//       {/* BLOG LIST */}
//       <div className="max-w-5xl mx-auto mt-16 grid md:grid-cols-2 gap-8">
//         {blogs.length === 0 && (
//           <p className="text-gray-400 text-center col-span-full">
//             No blogs published yet.
//           </p>
//         )}

//         {blogs.map((blog) => (
//           <div key={blog._id} className="bg-white/10 p-6 rounded-2xl">
//             <h2 className="text-2xl font-bold">{blog.title}</h2>
//             <p className="text-sm text-gray-400 mb-2">
//               By {blog.author}
//             </p>
//             <p className="text-gray-300 mb-4">{blog.content}</p>

//             <div className="flex gap-4">
//               <button
//                 onClick={() => editBlog(blog)}
//                 className="bg-blue-600 px-4 py-2 rounded"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => deleteBlog(blog._id)}
//                 className="bg-red-600 px-4 py-2 rounded"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/blogs";



export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({
    title: "",
    content: "",
    author: "",
  });
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, []);


  // LOAD BLOGS
  const loadBlogs = async () => {
    try {
      const res = await axios.get(API_URL);
      setBlogs(res.data.data || []);
    } catch (err) {
      console.error("Load error", err);
      setBlogs([]);
    }
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  // SUBMIT BLOG
  const submitHandler = async (e) => {
    e.preventDefault();

    if (form.title.length < 3)
      return alert("Title must be at least 3 characters");

    if (form.content.length < 10)
      return alert("Content must be at least 10 characters");

    if (!form.author.trim())
      return alert("Author name required");

    setLoading(true);

    try {
      if (editId) {
        await axios.put(`${API_URL}/${editId}`, form);
        setEditId(null);
      } else {
        await axios.post(API_URL, form);
      }

      setForm({ title: "", content: "", author: "" });
      loadBlogs();
    } catch (error) {
      alert(error.response?.data?.message || "Backend error");
    }

    setLoading(false);
  };

  const editBlog = (blog) => {
    setForm({
      title: blog.title,
      content: blog.content,
      author: blog.author,
    });
    setEditId(blog._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const deleteBlog = async (id) => {
    if (!window.confirm("Delete this blog?")) return;
    await axios.delete(`${API_URL}/${id}`);
    loadBlogs();
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 pt-40 pb-20">
      <h1 className="text-4xl font-bold text-center mb-10">
        Explorix Blogs
      </h1>

      {/* FORM */}
      <form
        onSubmit={submitHandler}
        className="max-w-3xl mx-auto bg-white/10 p-8 rounded-3xl space-y-4"
      >
        <input
          placeholder="Blog Title"
          className="w-full p-3 rounded bg-black/40"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <input
          placeholder="Author Name"
          className="w-full p-3 rounded bg-black/40"
          value={form.author}
          onChange={(e) => setForm({ ...form, author: e.target.value })}
        />

        <textarea
          placeholder="Blog Content"
          rows="5"
          className="w-full p-3 rounded bg-black/40"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
        />

        <button
          disabled={loading}
          className="w-full bg-purple-600 py-3 rounded font-bold"
        >
          {loading ? "Saving..." : editId ? "Update Blog" : "Publish Blog"}
        </button>
      </form>

      {/* BLOG LIST */}
      <div className="max-w-5xl mx-auto mt-14 grid md:grid-cols-2 gap-8">
        {blogs.map((blog) => (
          <div key={blog._id} className="bg-white/10 p-6 rounded-2xl">
            <h2 className="text-xl font-bold">{blog.title}</h2>
            <p className="text-sm text-gray-400">By {blog.author}</p>
            <p className="mt-3 text-gray-300">{blog.content}</p>

            <div className="flex gap-3 mt-4">
              <button
                onClick={() => editBlog(blog)}
                className="bg-blue-600 px-4 py-2 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => deleteBlog(blog._id)}
                className="bg-red-600 px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
