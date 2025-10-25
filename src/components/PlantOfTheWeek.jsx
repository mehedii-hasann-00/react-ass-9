import { Link } from "react-router-dom";

export default function PlantOfTheWeek() {
  const featuredPlant = {
    id: 7,
    name: "Monstera Deliciosa",
    category: "Tropical",
    price: 45,
    rating: 4.9,
    description:
      "Known for its unique split leaves, Monstera brings tropical elegance to any room. Perfect for bright, indirect light and regular watering.",
    image: "./monster.jpeg",
  };

  return (
    <section className="relative py-16 px-6 text-center overflow-hidden">
      {/* Background leaf accent */}
      <div className="absolute inset-0 bg-[url('/leaf-bg.svg')] bg-cover opacity-10"></div>

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left: Image */}
        <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
          <img
            src={featuredPlant.image}
            alt={featuredPlant.name}
            className="w-80 h-80 object-cover rounded-2xl shadow-lg border border-green-100"
          />
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-1/2 text-left space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif text-green-800">
            🌿 Plant of the Week
          </h2>
          <h3 className="text-2xl font-semibold text-slate-800">
            {featuredPlant.name}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {featuredPlant.description}
          </p>

          <div className="flex items-center gap-4 mt-4">
            <span className="text-green-700 font-medium text-lg">
              ${featuredPlant.price}
            </span>
            <span className="text-yellow-500 flex items-center">
              ⭐ {featuredPlant.rating}
            </span>
          </div>

          <Link
            to={`/plants/${featuredPlant.id}`}
            className="inline-block mt-6 bg-gradient-to-r from-green-700 to-green-500 text-white font-medium px-6 py-3 rounded-md hover:from-green-600 hover:to-green-400 transition-all duration-300 shadow-md"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
