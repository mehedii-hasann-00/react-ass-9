import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AppsContext } from "../AppsContext";
import { motion } from "framer-motion";
import CareTips from "./CareTips";

export default function Home() {
    const [totalShow, setTotalShow] = useState(8);
    const { plants } = useContext(AppsContext);

    // Filter top-rated plants
const topRated = plants
  ? [...plants].sort((a, b) => b.rating - a.rating).slice(0, 4)
  : [];


    return (
        <>
            <section className="relative bg-[#f8f7f3] overflow-hidden py-8">
                <div className="grid md:grid-cols-2 items-center min-h-[80vh] px-8 md:px-16">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="space-y-6"
                    >
                        <h1 className="text-5xl md:text-6xl font-serif leading-tight text-[#1f3a2e]">
                            Uncomplicate <br />
                            indoor <br />
                            <span className="italic text-green-800">gardening</span>
                        </h1>
                        <p className="text-gray-600 text-lg max-w-md">
                            Explore our collection of healthy indoor plants and accessories to
                            create your own green oasis.
                        </p>
                        <Link
                            to="/plants"
                            className="inline-block border border-gray-400 text-gray-800 px-6 py-3 rounded-md hover:bg-green-800 hover:text-white transition"
                        >
                            Discover
                        </Link>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="flex justify-center mt-10 md:mt-0"
                    >
                        <img
                            src="/slider1.jpg"
                            alt="Indoor plants"
                            className="rounded-lg shadow-lg w-full max-w-md md:max-w-lg object-cover"
                        />
                    </motion.div>
                </div>
            </section>

            <section className="py-16 px-8 bg-white">
                <h2 className="text-3xl font-semibold text-center text-green-800 mb-10">
                    Top Rated Indoor Plants
                </h2>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {topRated.map((plant) => (
                        <div
                            key={plant.plantId}
                            className="bg-gray-50 p-4 rounded-xl border hover:shadow-lg transition"
                        >
                            <img
                                src={plant.image}
                                alt={plant.plantName}
                                className="w-full h-56 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-lg font-semibold text-slate-800">
                                {plant.plantName}
                            </h3>
                            <p className="text-green-700 font-medium">${plant.price}</p>
                            <p className="text-yellow-500 text-sm">⭐ {plant.rating}</p>
                            <Link
                                to={`/plants/${plant.plantId}`}
                                className="inline-block mt-3 text-white bg-green-700 hover:bg-green-600 px-4 py-2 rounded-md text-sm font-medium"
                            >
                                View Details
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* <section className="py-16 px-8 bg-[#f8f7f3]">
                <h2 className="text-3xl font-semibold text-center text-green-800 mb-10">
                    🌱 Plant Care Tips
                </h2>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
                    <div className="p-6 bg-white rounded-lg shadow-sm border">
                        <h3 className="text-xl font-semibold text-green-700 mb-3">
                            💧 Watering
                        </h3>
                        <p className="text-gray-600">
                            Most indoor plants prefer moist soil. Water when the top inch feels
                            dry, but avoid overwatering.
                        </p>
                    </div>

                    <div className="p-6 bg-white rounded-lg shadow-sm border">
                        <h3 className="text-xl font-semibold text-green-700 mb-3">
                            ☀️ Sunlight
                        </h3>
                        <p className="text-gray-600">
                            Place your plants near bright, indirect light. Too much direct
                            sun can burn the leaves.
                        </p>
                    </div>

                    <div className="p-6 bg-white rounded-lg shadow-sm border">
                        <h3 className="text-xl font-semibold text-green-700 mb-3">
                            🌿 Fertilizing
                        </h3>
                        <p className="text-gray-600">
                            Use organic fertilizer every 4–6 weeks to keep your indoor plants
                            healthy and vibrant.
                        </p>
                    </div>
                </div>
            </section> */}
            <CareTips/>

            <section className="py-16 px-8 bg-white">
                <h2 className="text-3xl font-semibold text-center text-green-800 mb-10">
                    🌼 Meet Our Green Experts
                </h2>

                <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 max-w-6xl mx-auto text-center">
                    {[
                        {
                            name: "Sophia Green",
                            role: "Plant Care Specialist",
                            img: "/sophie.jpeg",
                        },
                        {
                            name: "Liam Leaf",
                            role: "Indoor Decor Expert",
                            img: "/liam.jpeg",
                        },
                        {
                            name: "Ava Bloom",
                            role: "Botanical Designer",
                            img: "/ava.jpeg",
                        },
                        {
                            name: "Ethan Moss",
                            role: "Soil & Growth Expert",
                            img: "/moss.jpeg",
                        },
                    ].map((expert) => (
                        <div
                            key={expert.name}
                            className="bg-gray-50 rounded-xl p-6 border hover:shadow-md transition"
                        >
                            <img
                                src={expert.img}
                                alt={expert.name}
                                className="w-32 h-32 rounded-lg mx-auto mb-4"
                            />
                            <h3 className="text-lg font-semibold text-slate-800">
                                {expert.name}
                            </h3>
                            <p className="text-green-700 text-sm">{expert.role}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= ECO DECOR IDEAS (OPTIONAL) ================= */}
            <section className="py-16 px-8 bg-[#f8f7f3]">
                <h2 className="text-3xl font-semibold text-center text-green-800 mb-10">
                    🪴 Eco Decor Ideas
                </h2>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            title: "Minimalist Green Corner",
                            img: "/minimal.jpeg",
                        },
                        {
                            title: "Bedroom Jungle Vibes",
                            img: "/jungle.jpeg",
                        },
                        {
                            title: "Office Fresh Space",
                            img: "/office.jpeg",
                        },
                    ].map((item) => (
                        <div
                            key={item.title}
                            className="rounded-xl overflow-hidden shadow-sm bg-white border hover:shadow-md transition"
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="h-32 w-full object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-slate-800">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
