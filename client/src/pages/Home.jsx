import {  useNavigate } from "react-router-dom";
import services from "../data/servicesData";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="text-white">

      {/* HOME */}
      <section id="home" className="min-h-screen flex items-center justify-center text-center px-6 pt-32 ">
        <div>
          <h1 className="text-6xl font-extrabold gradient-text">Explorix</h1>
          <p className="mt-6 text-gray-300">
            At Explorix, we don’t just build projects—we create experiences that matter. Combining cutting-edge technology with trust and creativity, we deliver solutions that drive growth, spark innovation, and make a real impact. Our clients love working with us, sharing glowing reviews and the best experiences that reflect our dedication to quality and results. Join us on a journey where your ideas become reality and every solution opens doors to new opportunities.
          </p>
          <div className="mt-10 flex justify-center gap-6">
            <button
              onClick={() => {
                document.getElementById("services").scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-primary"
            >
              Explore Services
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-40 text-center max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold">About Explorix</h2>
        <p className="mt-6 text-gray-300">
         <h2>Who We Are:</h2> 
Explorix is your gateway to innovation and discovery. We specialize in creating solutions that blend technology, creativity, and strategy to deliver exceptional experiences. Whether it’s digital transformation, service excellence, or engaging content, we help you explore new horizons.
        </p>
        <p className="mt-6 text-gray-300">
         <h2>Our Mission:</h2> 
To empower businesses and individuals by providing innovative solutions that inspire growth, creativity, and meaningful connections.
        </p>
        <p className="mt-6 text-gray-300">
         <h2>Our Vision:
</h2> 
 To become a leading force in delivering experiences that combine technology, creativity, and excellence.
        </p>
        <button
          onClick={() => navigate("/about")}
          className="mt-6 text-cyan-400"
        >
          Read more →
        </button>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-40 px-8 bg-black/30">
        <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {services.map(service => (
            <div
              key={service.id}
              onClick={() => navigate(`/services/${service.id}`)}
              className="glass rounded-3xl p-10 cursor-pointer hover:-translate-y-3 transition"
            >
              <h3 className="text-2xl font-bold text-cyan-400">{service.title}</h3>
              <p className="text-sm text-gray-400 mt-2">
                Domain Lead: {service.leader}
              </p>
              <p className="mt-4 text-gray-300 text-sm">
                Click to view full details & submit project.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="py-40 text-center max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold">Our Blog</h2>
        <p className="mt-6 text-gray-300">
          Learn why blogs help businesses grow & stay updated.
        </p>
        <button
          onClick={() => navigate("/blog")}
          className="mt-6 text-cyan-400"
        >
          Go to Blog →
        </button>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-40 text-center bg-black/40">
        <h2 className="text-4xl font-bold">Client Trust</h2>
        <p className="mt-6 text-2xl">
          ⭐ 4.3 Rating • 🚀 50+ Projects Completed
        </p>
        <button
          onClick={() => navigate("/reviews")}
          className="mt-6 text-cyan-400"
        >
          View Reviews →
        </button>
      </section>

      {/* FOOTER
      <footer className="bg-black/90 py-12 text-gray-400 text-center">
        © 2025 Explorix. All rights reserved.
      </footer> */}

    </div>
  );
}
