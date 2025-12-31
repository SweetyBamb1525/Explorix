import services from "../data/servicesData";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="min-h-screen pt-32 px-8 text-white">
      <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
        Our Services
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
{services.map(s => (
<Link key={s.id} to={`/services/${s.id}`} className="group glass rounded-2xl p-8 transition hover:-translate-y-3 hover:shadow-2xl">
<h3 className="text-2xl font-bold group-hover:text-teal-400 transition">{s.title}</h3>
<p className="mt-2 text-sm text-gray-400">Leader: {s.leader}</p>
<p className="mt-4 text-gray-300 text-sm">Premium solutions designed for performance & scale.</p>
</Link>
))}
</div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service) => (
          <Link
            key={service.id}
            to={`/services/${service.id}`}
            className="bg-black/40 backdrop-blur-lg border border-white/10 p-6 rounded-2xl hover:scale-105 transition"
          >
            <h2 className="text-2xl font-semibold mb-2">
              {service.title}
            </h2>
            <p className="text-gray-300">{service.description}</p>
            <p className="mt-4 text-sm text-purple-400">
              Lead: {service.leader}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
