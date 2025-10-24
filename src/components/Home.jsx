import { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { AppsContext } from "../AppsContext";
export default function Home() {

    const [totalShow, setTotalShow] = useState(8);
    const { apps } = useContext(AppsContext);
    return (
        <>
            <section class="grid md:grid-cols-2 items-center min-h-[80vh] px-8 md:px-16 bg-[#f8f7f3]">
                <div class="space-y-6">
                    <h1 class="text-5xl md:text-6xl font-serif leading-tight text-[#1f3a2e]">
                        Uncomplicate <br />
                        indoor <br />
                        <span class="italic text-green-800">gardening</span>
                    </h1>
                    <p class="text-gray-600 text-lg max-w-md">
                        Explore our collection of healthy indoor plants and accessories to create your own green oasis.
                    </p>
                    <button class="border border-gray-400 text-gray-800 px-6 py-3 rounded-md hover:bg-green-800 hover:text-white transition">
                        Discover
                    </button>
                </div>

                <div class="flex justify-center mt-10 md:mt-0">
                    <img src="./slider1.jpg" alt="Indoor plants" class="rounded-lg shadow-lg w-full max-w-md md:max-w-lg object-cover" />
                </div>
            </section>
        </>
    );
}
