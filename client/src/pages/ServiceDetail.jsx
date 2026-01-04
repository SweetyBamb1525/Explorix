import { useParams } from "react-router-dom";
import { useState,  useEffect} from "react";
import services from "../data/servicesData";
import { motion } from "framer-motion";
// import axios from "axios";
import API from "../utils/api";

export default function ServiceDetail() {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    },  [id]);


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: service?.title || "",
    message: "",
  });

  if (!service) {
    return (
      <p className="text-white text-center mt-40 text-xl">
        Service not found
      </p>
    );
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // await axios.post("/api/leads", formData);
      await API.post("/api/leads", formData);

      alert(
        "Thank you for connecting with Explorix 🚀\nOur team will contact you shortly."
      );

      setFormData({
        name: "",
        email: "",
        service: service.title,
        message: "",
      });
    } catch (error) {
      console.error("Form submit error:", error.response?.data || error.message);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen pt-40 px-6 md:px-20 text-white">

      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h1 className="text-6xl font-extrabold gradient-text mb-4">
          {service.title}
        </h1>

        <p className="text-purple-400 text-lg">
          Domain Lead: {service.leader}
        </p>

        <p className="text-gray-300 mt-6 text-lg">
          {service.description}
        </p>
      </motion.section>

      {/* HOW WE WORK */}
      <section className="mt-24 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">How We Work</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {service.howWeWork.map((step, i) => (
            <div key={i} className="glass p-6 rounded-2xl">
              ✔ {step}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECT TYPES */}
      <section className="mt-24 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Projects We Deliver</h2>

        <div className="flex flex-wrap gap-4">
          {service.projectTypes.map((type, i) => (
            <span
              key={i}
              className="px-5 py-2 bg-purple-600/20 rounded-full text-sm"
            >
              {type}
            </span>
          ))}
        </div>
      </section>

      {/* PAST PROJECTS */}
      <section className="mt-24 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">
          Past Projects & Client Reviews
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {service.pastProjects.map((proj, i) => (
            <div key={i} className="glass p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-2">
                {proj.name}
              </h3>
              <p className="text-gray-400">{proj.review}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECT FORM */}
      <section className="mt-32 max-w-3xl mx-auto pb-32">
        <h2 className="text-4xl font-bold text-center mb-10">
          Start Your {service.title} Project
        </h2>

        <form
          onSubmit={handleSubmit}
          className="glass p-10 rounded-3xl space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-black/40 outline-none"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-black/40 outline-none"
            required
          />

          <textarea
            name="message"
            placeholder="Describe your project requirements"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-black/40 outline-none"
            required
          />

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-semibold hover:scale-105 transition"
          >
            Submit Project Request
          </button>
        </form>
      </section>

    </div>
  );
}
































