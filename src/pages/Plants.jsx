
import { useContext, useState } from 'react';
import { AppsContext } from '../AppsContext';
import { Link } from "react-router-dom";

function Plants() {
  const { plants } = useContext(AppsContext);
  const [searchedApp, setSearchedApp] = useState([]);
  const [searchText, setSearchText] = useState('');
  const handle_search = (val) => {
    setSearchText(() => {
      setSearchedApp(plants.filter(plant => (plant.plantName).toLowerCase().includes(val.toLowerCase())));
      return val;
    });
  }
  console.log(plants);
  return (
    <div class="min-h-screen bg-gray-50 mb-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <header class="text-center space-y-2">
          <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-800">
            Our All Plants
          </h1>
          <p class="text-slate-500">
            Explore All Plants on the Market bought by Millions
          </p>
        </header>

        <div class="mt-8 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p class="text-slate-600 font-medium">
            <span class="font-semibold">({searchedApp.length > 0 ? searchedApp.length : searchText.length === 0 ? plants.length : 0})</span> Plants Found
          </p>

          <label class="relative block">
            <span class="sr-only">Search plant</span>
            <span class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21-4.35-4.35m1.35-4.65a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
              </svg>
            </span>
            <input
              onChange={(e) => handle_search(e.target.value)}
              type="text"
              placeholder="search plant"
              class="w-full sm:w-96 rounded-lg border border-slate-200 bg-white pl-10 pr-3 py-2 text-sm placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-300"
            />
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 px-8">
        {searchedApp && searchedApp.length > 0 ?
          searchedApp.map((app, index) => (
            <Link to={`/plants/${app.plantId}`} key={app.plantId} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 hover:shadow-md transition">
              <div className="bg-gray-200 rounded-md h-40 flex items-center justify-center">
                <img src={app.image} alt="App Preview" className="h-40 w-40 object-cover rounded-md" />
              </div>

              <h3 className="text-sm font-semibold mt-3 text-gray-800">
                {app.plantName}
              </h3>

              <div className="flex items-center justify-between mt-2 text-sm">
                <div className="flex items-center text-green-600 font-medium">
                  <span>{app.price} $</span>
                </div>
                <div className="flex items-center text-yellow-500 font-medium">
                  <i class="lni lni-star-fat"></i>
                  <span>{app.rating}</span>
                </div>
              </div>
            </Link>
          )
          )
          :
          searchText.length === 0 ?
            plants.map((app, index) => (
              <Link to={`/plants/${app.plantId}`} key={app.plantId} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 hover:shadow-md transition">
                <div className="bg-gray-200 rounded-md h-40 flex items-center justify-center">
                  <img src={app.image} alt="App Preview" className="h-40 w-80 object-cover rounded-md" />
                </div>

                <h3 className="text-sm font-semibold mt-3 text-gray-800">
                  {app.plantName}
                </h3>

                <div className="flex items-center justify-between mt-2 text-sm">
                  <div className="flex items-center text-green-600 font-medium">
                    <span>{app.price} $</span>
                  </div>
                  <div className="flex items-center text-yellow-500 font-medium">
                    <i class="lni lni-star-fat"></i>
                    <span>{app.rating}</span>
                  </div>
                </div>
              </Link>
            )
            )
            :
            <div className='text-red-500 text-lg text-center'>No Plant Found...</div>
        }

      </div>
    </div>

  )
}

export default Plants