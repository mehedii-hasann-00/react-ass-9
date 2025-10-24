import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AppsContext } from "../AppsContext";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PlantsDetails() {
  const { id } = useParams();
  const { plants } = useContext(AppsContext) ?? { plants: [] };
  const [plant, setPlant] = useState(null);

  const [formData, setFormData] = useState({ name: "", email: "" });

  useEffect(() => {
    if (!plants || plants.length === 0) return;

    const found = plants.find((item) => String(item.plantId) === String(id));
    setPlant(found ?? null);

  }, [plants, id]);

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {

      toast.error("Please fill in all fields!");
      return;
    }


    toast.success("Consultation booked successfully!");
    setFormData({ name: "", email: "" });
  };

  if (!plant) {
    return (
      <section className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4 text-center">
        <img
          src="/App-Error.png"
          alt="Not Found"
          className="max-w-xs sm:max-w-sm mb-8"
        />

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-2">
          OOPS!! PLANT NOT FOUND
        </h1>

        <p className="text-slate-500 max-w-md mx-auto mb-6">
          The plant you are looking for is not found in our system. Please try another one.
        </p>
        <a
          href="/plants"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md px-6 py-2 shadow-md transition-all"
        >
          Go Back!
        </a>
      </section>
    );
  }

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div className="flex justify-center items-center">
              <img
                src={`../${plant.image}`}
                alt={plant.plantName}
                className="w-full max-w-md h-auto rounded-xl object-cover shadow-sm"
              />
            </div>

            <div className="space-y-5">
              <h1 className="text-3xl font-semibold text-green-800">
                {plant.plantName}
              </h1>
              <p className="text-gray-600 leading-relaxed">{plant.description}</p>

              <div className="flex items-center justify-between text-lg font-medium mt-4">
                <span className="text-green-700">${plant.price}</span>
                <span className="text-yellow-500 flex items-center gap-1">
                  <i class="lni lni-star-fat"></i> {plant.rating}
                </span>
              </div>

              <div className="text-sm text-gray-700">
                <strong>In Stock:</strong> {plant.availableStock}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 p-8 flex flex-col items-center text-center bg-gradient-to-b from-white to-green-50">
            <h2 className="text-2xl font-semibold text-slate-800 mb-3">
              Book a Free Consultation
            </h2>
            <p className="text-gray-600 mb-8 max-w-md">
              Get personalized plant care tips from our experts and make your indoor garden thrive.
            </p>

            <form
              onSubmit={handleSubmit}
              className="grid sm:grid-cols-2 gap-6 w-full max-w-2xl"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInput}
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-600 outline-none shadow-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInput}
                  placeholder="your@email.com"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-600 outline-none shadow-sm"
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="cursor-pointer w-full py-3 rounded-md font-medium text-white bg-gradient-to-r from-green-700 via-green-600 to-emerald-500 hover:scale-[1.02] hover:shadow-green-300/40 transition-transform shadow-lg"
                >
                  Book Now
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </>
  );
}
