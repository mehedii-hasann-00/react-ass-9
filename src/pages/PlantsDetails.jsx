import { useParams } from "react-router-dom";
import { useContext, useState, useEffect, useMemo } from "react";
import { AppsContext } from "../AppsContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function PlantsDetails() {
  const { id } = useParams();                    // string
  const { apps } = useContext(AppsContext) ?? { apps: [] };

  const [app, setApp] = useState(null);          // null, not boolean
  const [isInstalled, setIsInstalled] = useState(false);

  // Find the app whenever apps or id changes
  useEffect(() => {
    if (!apps || apps.length === 0) return;
    const found = apps.find((item) => String(item.id) === String(id));
    setApp(found ?? null);

    // Check install status (normalize id types)
    const saved = JSON.parse(localStorage.getItem("installedApps") || "[]");
    const installed = saved.some((it) => String(it.id) === String(id));
    setIsInstalled(installed);
  }, [apps, id]);




    const notify = (msg) => {
    toast.success(msg);
  };
  if (!app) {
    return (
      <section class="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4 text-center">
        <img
          src="../App-Error.png"
          alt="Not Found Cat"
          class="max-w-xs sm:max-w-sm mb-8"
        />

        <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-2">
          OOPS!! APP NOT FOUND
        </h1>

        <p class="text-slate-500 max-w-md mx-auto mb-6">
          The App you are requesting is not found on our system. Please try another app.
        </p>

        <a
          href="/apps"
          class="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md px-6 py-2 shadow-md transition-all"
        >
          Go Back!
        </a>
      </section>

    );
  }

  return (
    <>
    <ToastContainer />
    
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <img
            src={app.image}
            alt={app.title}
            className="w-36 h-36 rounded-xl object-contain bg-gray-100"
          />
          <div className="space-y-3">
            <h1 className="text-2xl font-semibold text-slate-800">{app.title}</h1>
            <p className="text-slate-500">
              Developed by{" "}
              <span className="text-indigo-600 font-medium">{app.companyName}</span>
            </p>



            {!isInstalled ? (
              <button
                onClick={handleInstall}
                className="px-4 py-2 rounded-md bg-emerald-600 text-white font-semibold hover:bg-emerald-700"
              >
                Install Now ({app.size} MB)
              </button>
            ) : (
              <button
                disabled
                className="cursor-not-allowed pointer-events-none px-4 py-2 rounded-md bg-gray-300 text-gray-600 font-semibold"
              >
                Installed
              </button>
            )}
          </div>
        </div>



        {/* Description */}
        <div className="bg-white mt-8 border border-gray-200 rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-slate-800">Description</h2>
          <p className="mt-3 text-slate-700 leading-7">{app.description}</p>
        </div>
      </div>
    </div>
    </>
  );
}


